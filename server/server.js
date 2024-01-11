// server.js

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const jwtSecret = 'your-secret-key'; // Replace with a strong, secret key
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const app = express();

app.use(express.json());

// Passport middleware setup
app.use(passport.initialize());

// Local Strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    // Replace this with your actual user lookup logic
    const user = { id: 1, email: 'test@example.com', password: '$2b$10$RfmzKKm3uMx2ETrm7iOeDuOg8b3KW8lihRGTrXtIfR4BQkV5nBoFq' }; // Example user with hashed password

    if (!user) return done(null, false);

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return done(null, false);

    return done(null, user);
  }
));

// JWT Strategy
passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  // Replace this with your actual user lookup logic
  const user = { id: payload.sub, email: payload.email }; // Example user

  if (!user) return done(null, false);

  return done(null, user);
}));

// Routes
app.post('/api/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ sub: req.user.id, email: req.user.email }, jwtSecret);
  res.json({ token });
});

// Example protected route
app.get('/api/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'You have accessed a protected route!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
