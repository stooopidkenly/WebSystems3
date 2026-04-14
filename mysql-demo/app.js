const promisePool = require('./db.js');

// INSERT 
async function createStudent(name, email){
  const sqlQuery = "INSERT INTO students(name, email) VALUES (?, ?)";
  try{
    const [result] = await promisePool.execute(sqlQuery, [name, email]);
    return result.insertId;
  }catch(err){
    console.log('Error in Create', err);
  }
}

// SELECT
async function getAllStudents() {
    const sqlQuery = "SELECT * FROM students";
    try{
      const [rows] = await promisePool.query(sqlQuery);
      return rows;
    }catch(err){
      console.log('Error in Read', err);  
    }
}

// UPDATE
async function updateStudentEmail(id, email){
  const sqlQuery = "UPDATE students SET email = ? WHERE id = ?";
  try{
    const [result] = await promisePool.execute(sqlQuery, [email, id]);
    return result.affectedRows;
  }catch(err){
    console.log('Error in Update', err);  
  }
}

// DELETE
async function deleteStudent(id){
  const sqlQuery = "DELETE FROM students WHERE id = ?";
  try{
    const [result] = await promisePool.execute(sqlQuery, [id]);
    return result.affectedRows;
  }catch(err){
    console.log('Error in Delete', err);  
  }
}

async function runDemo(){
  
  // CREATE
  const newId = await createStudent('Luffy', 'pirateking@gmail.com');
  console.log(`Created student with ID: ${newId}`);

  // READ
  const studentsBefore = await getAllStudents();
  console.log("Before Update/Delete:");
  console.table(studentsBefore);

  // UPDATE
  const updatedRows = await updateStudentEmail(newId, 'luffy@gmail.com');
  console.log(`Updated rows: ${updatedRows}`);

  // READ again
  const studentsAfterUpdate = await getAllStudents();
  console.log("After Update:");
  console.table(studentsAfterUpdate);

  // DELETE
  const deletedRows = await deleteStudent(newId);
  console.log(`Deleted rows: ${deletedRows}`);

  // FINAL READ
  const studentsAfterDelete = await getAllStudents();
  console.log("After Delete:");
  console.table(studentsAfterDelete);

  process.exit();
}

runDemo();