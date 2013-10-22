var Student = function (first_name, second_name) {
	this.first_name = first_name,
	this.second_name = second_name,
	this.name = function () {
		return this.first_name + " " + this.second_name;
	},
	this.courses = [],
	this.enroll = function (course) {
		if (this.courses.indexOf(course) === -1) {
			this.courses.push(course);
			course.enrolled_students.push(this);
			return this.courses;
		}
	},
	this.courseLoad = function () {
		results = {};
		this.courses.forEach ( function (course) {

			d = course.department;
			if (results[d]) {
				results[d] += course.num_credits;
			} else {
				results[d] = course.num_credits;
			}
		})
		return results;
	}
}

var Course = function(course_name, department, num_credits) {
	this.course_name = course_name,
	this.department = department,
	this.num_credits = num_credits,
	this.enrolled_students = [],
	this.add_student = function (student) {
		if (this.enrolled_students.indexOf(student) === -1) {
			this.enrolled_students.push(student);
			student.courses.push(this);
			return this.enrolled_students;
		}
	}
}

kush = new Student("Kush", "Patel");
ned = new Student("Ned", "Ruggeri");
aa = new Course("AppAcademy", "CS", 10);
ca = new Course("CodeAcademy", "CS", 5);
p = new Course("Painting", "Art", 5);

kush.enroll(aa)
kush.enroll(ca)
p.add_student(ned)
p.add_student(kush)
// console.log(kush.courses)
cl = kush.courseLoad()
s = p.enrolled_students

