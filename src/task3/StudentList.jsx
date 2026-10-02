function StudentList() {
  const students = [
    {
      id: 1,
      name: "Ali",
      score: 85,
    },
    {
      id: 2,
      name: "Sara",
      score: 72,
    },
    {
      id: 3,
      name: "Ahmed",
      score: 45,
    },
    {
      id: 4,
      name: "Fatima",
      score: 38,
    },
    {
      id: 5,
      name: "Hassan",
      score: 91,
    },
  ];

  return (
    <div className="student-list">
      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h2>{student.name}</h2>

          <p>
            Score: <strong>{student.score}</strong>
          </p>

          {student.score >= 50 ? (
            <p className="pass">Pass</p>
          ) : (
            <p className="fail">Fail</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;