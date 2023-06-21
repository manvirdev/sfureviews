import mongoose from 'mongoose';
import { Student } from '../../src/modules/student/schemas/student.schema';
import { Professor } from '../../src/modules/professor/schemas/professor.schema';
import config from '../../config/mongo.config';

mongoose.connect(config.uri, config);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log("We're connected!");

  // Create some students
  const students = [
    new Student({ firstName: 'John', lastName: 'Doe', email: 'john@doe.com', program: 'Computer Science', pronouns: 'he/him' }),
    new Student({ firstName: 'Jane', lastName: 'Smith', email: 'jane@smith.com', program: 'Mathematics', pronouns: 'she/her' }),
    new Student({ firstName: 'Bob', lastName: 'Johnson', email: 'bob@johnson.com', program: 'Biology', pronouns: 'he/him' }),
  ];

  // Create some professors
  const professors = [
    new Professor({ name: 'Prof. X', department: 'Physics', email: 'prof.x@uni.com' }),
    new Professor({ name: 'Prof. Y', department: 'Mathematics', email: 'prof.y@uni.com' }),
    new Professor({ name: 'Prof. Z', department: 'Computer Science', email: 'prof.z@uni.com' }),

  ];

  for (const student of students) {
    await student.save();
  }

  for (const professor of professors) {
    await professor.save();
  }

  console.log('Data seeded!');
  mongoose.connection.close();
});
