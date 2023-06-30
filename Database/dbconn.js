import mongoose from 'mongoose';

const dbconn = async () => {
  const { connection } = await mongoose.connect(
    'mongodb+srv://zidev:123@cluster0.pu0ehdt.mongodb.net/'
  );
  try {
    if (connection.readyState === 1) {
      Promise.resolve(true);
      console.log('Database Connected Succesfully');
    }
  } catch (error) {
    Promise.reject(false);
    throw Error('There was a problem connecting to the database');
  }
};

export default dbconn;
