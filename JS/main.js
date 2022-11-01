const btnGuardar = document.querySelector("#btnGuardar");

let nuevoPaciente;

btnGuardar.addEventListener("click", (event) => {
  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#correo").value;
  const telefono = document.querySelector("#telefono").value;
  const fecha = document.querySelector("#fechanacimiento").value;

  nuevoPaciente = new Paciente(nombre, correo, telefono, fecha);

  function Paciente(nombre, correo, telefono, fecha) {
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
    this.fecha = fecha;
  }

  agregarPaciente();
});

let listadoPacientes = [];
const agregarPaciente = () => {
  listadoPacientes.push(nuevoPaciente);
  document.getElementById("tabla").innerHTML += 
  `<tbody>
      <td>${nuevoPaciente.nombre}</td>
      <td>${nuevoPaciente.correo}</td>
      <td>${nuevoPaciente.telefono}</td>
      <td>${nuevoPaciente.fecha}</td>
    </tbody>`;
  console.log(nuevoPaciente);
  // const tr = document.createElement("tr");
  // const td1 = document.createElement("td");
  // const td2 = document.createElement("td");
  // const td3 = document.createElement("td");
  // const td4 = document.createElement("td");
  // const table =document.querySelector("table")

  // td1.innerHTML = nuevoPaciente.nombre;
  // td2.innerHTML = nuevoPaciente.correo;
  // td3.innerHTML = nuevoPaciente.telefono;
  // td4.innerHTML = nuevoPaciente.fecha;
  // table.appendChild(tr);
  // tr.appendChild(td1);
  // tr.appendChild(td2);
  // tr.appendChild(td3);
  // tr.appendChild(td4);
};
