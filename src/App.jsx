export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((student) => (
          <li
            key={student.name}
            onClick={() =>
              alert(`나이는 ${student.age}이고, 점수는 ${student.grade}입니다.`)
            }
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
