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

//create from CRUD
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
// Read from CRUD
async function getCourses() {

	//paginations
	const pageNumber = 2;
	const pageSize = 10;
	// link will be api/courses?pageNumber=2&pageSize=10;
	// .skip((pageNumber-1) * pageSize)
	// .limit(pageSize)
	// This two lines needed for implementations

//arithmetic operators
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
	// .count();


	.find({ author: 'Mosh'})
	.skip((pageNumber-1) * pageSize)
	.limit(pageSize)
	.sort({ name: 1 })
	// .select({ name: 1, tags:1 });
	console.log(courses);
}



//Update from CRUD
//query first technique to update a data in mongodb
// async function updateCourse(id) {
	// Approch: Query First
	// findById();
	// Modify its properties
	// save();
	// const course = await Course.findById(id);
	// if(!course) return;
	// course.isPublished=true;
	// course.author = 'Another Author';
//Same thing as up
	// course.set({
	// 	isPublished: true,
	// 	author: 'Another Author'
	// });
//update section
// 	const result = await course.save();
// 	console.log(result);
// }

// Approch: Update First
// Update directly
//Optionally: get the updated Document
async function updateCourse(id) {
	//direct update
	const result = await Course.update({ _id: id }, {
		$set: {
			author: 'Mosh',
			isPublished: false
		}
	});
	console.log(result);
	//find through id and update the class.
	const course = await Course.findByIdAndUpdate(id, {
		$set: {
			author: 'Mosh',
			isPublished: false
		}
	}, { new: true });
	console.log(course);
}



// createCourse();
// getCourses();
// updateCourse('5d17862b0346df121c12b5cf');
