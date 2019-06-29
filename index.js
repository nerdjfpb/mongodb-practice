const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
	.then( () => console.log('Connected to MongoDB...'))
	.catch(err => console.error('Could not connect to MongoDB ', err)); 
// String
// Number
// Date
// Buffer
// Boolean
// ObjectID
// Array
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [ String ],
	date: { type: Date, default: Date.now },
	isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);

async function createCourse(){
	const course = new Course({
		name: 'Angular js course',
		author: 'Mosh',
		tags: ['angular', 'frontend'],
		isPublished: true
	});

	const result = await course.save();
	console.log(result);

}

createCourse();
