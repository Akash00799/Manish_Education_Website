// src/components/TeacherList.jsx
import React from "react";
import styles from "../styles/ChatPage.module.css";

const TeacherList = ({ teachers, onSelectTeacher }) => {
  return (
    <div className={styles.teacherList}>
      <h3>Teachers</h3>
      <ul>
        {teachers.map((teacher) => (
          <li
            key={teacher.id}
            onClick={() => onSelectTeacher(teacher)}
            className={styles.teacherItem}
          >
            {teacher.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
