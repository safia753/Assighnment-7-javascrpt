

 const students = [
      {
        name: "Safia bukhari",
        age: 20,
        course: "Computer Science",
        email: "alice@example.com",
        image: "https://img.freepik.com/premium-photo/portrait-beautiful-muslim-woman-hijab-muslim-girl-with-blue-eyes-beauty-fashion_423236-2752.jpg?w=360"
      },
      {
        name: "Faizan barki",
        age: 22,
        course: " Engineering",
        email: "bob@example.com",
        image: "https://files.idyllic.app/files/static/96183"
      },
      {
        name: "memoona barki",
        age: 19,
        course: "Biology",
        email: "clara@example.com",
        image: "https://cdn.freepixel.com/thumb/free-photos-a-young-hijab-wearing-woman-with-a-bright-smile-standing-in-an-indoor-setting-she-is-wearing-an-oran-th-100366347.jpg"
      }
    ];

    const container = document.getElementById("profileContainer");

    // Generate profile cards
    students.forEach(student => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${student.image}" alt="${student.name}" />
        <h2>${student.name}</h2>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Email:</strong> <a href="mailto:${student.email}">${student.email}</a></p>
      `;

      container.appendChild(card);
    });