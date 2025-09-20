import dotenv from 'dotenv';
dotenv.config(); // MUST be first

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../models/User.js';

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_CALLBACK_URL!
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (user) {
      user.lastLogin = new Date();
      await user.save();
      return done(null, user);
    }

    user = await User.findOne({ email: profile.emails?.[0]?.value });
    if (user) {
      user.googleId = profile.id;
      user.isEmailVerified = true;
      user.avatar = profile.photos?.[0]?.value;
      user.lastLogin = new Date();
      await user.save();
      return done(null, user);
    }

    user = new User({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails?.[0]?.value,
      avatar: profile.photos?.[0]?.value,
      isEmailVerified: true,
      lastLogin: new Date()
    });

    await user.save();
    done(null, user);
  } catch (error) {
    done(error, undefined);
  }
}));

// JWT Strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'fallback-secret'
}, async (payload, done) => {
  try {
    const user = await User.findById(payload.id).select('-password');
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}));

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id).select('-password');
    done(null, user);
  } catch (error) {
    done(error, undefined);
  }
});

export default passport;
