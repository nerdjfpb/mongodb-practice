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

async function getCourses() {

	// eq (equal)
	// ne (not equal)
	// gt (great than)
	// gte (greater than or equal to)
	//lt (less than)
	//lte (less than or equal to)
	// in
	// nin (not in)

	const courses = await Course
	
// -----------------------------
	//Courses are greater than or equal to 10$
	// .find({ price: { $gte: 10 } })
// -----------------------------
	// courses are greater than or equal to 10 & smaller than or equal to 20$
	// .find({ price: { $gte: 10, $lte: 20 } })
// -----------------------------
	// Courses price in 10,15 or 20
	// .find({ price: { $in: [10, 15 , 20] } })
// -----------------------------

// logical operators
	// or
	// and
	// .find()
	// .or( [ {author: 'Mosh'}, { isPublished: true } ] )
	// .and( [ {author: 'Mosh'}, { isPublished: true } ])


//  Regular Expression
	// /pattern/ -- This is the way to describe regular expressions
	// /^Mosh/ --- This is gonna start with Mosh
	// /Hamedani$/ --- This is gonna end with Hamedani (case sensitive)
	// /Hamedani$/i --- This is gonna end with Hamedani (not case sensitive)
	// /.*Mosh.*/ --- This means Mosh is anywhere on the name (case senstive)
	// /.*Mosh.*/i --- This means Mosh is anywhere on the name (not case senstive)
	// Need a i for not case sensitive.

//counting
	.find({ author: 'Mosh'})
	.limit(10)
	.sort({ name: 1 })
	// .select({ name: 1, tags:1 });
	.count();
	console.log(courses);
}

// createCourse();
getCourses();


