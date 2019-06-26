const courses = [
    {
        _id: "anyid1",
        title: "Curso 1",
        teacher: "El Profesor",
        description: "any description",
        topic: "important things"
    },
    {
        _id: "anyid2",
        title: "Curso 2",
        teacher: "El Profesor",
        description: "any description",
        topic: "important things"
    },
    {
        _id: "anyid3",
        title: "Curso 3",
        teacher: "El Profesor",
        description: "any description",
        topic: "important things"
    }

]

module.exports = {
    Query: {
        getCourses: () => courses,
        getCourse: (root, args) => {
            const course = courses.filter(
                course => course._id == args._id
            );
            return course.pop();
        }

    }
}