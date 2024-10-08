const handleContactSubmit = async (e) => {
  e.preventDefault();

  // Recoger los datos del formulario
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    // Aquí irá la llamada a la API para enviar el correo
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   alert('Mensaje enviado con éxito. Gracias por contactarnos!');
    //   // Limpiar el formulario
    //   e.target.reset();
    // } else {
    //   throw new Error('Error al enviar el mensaje');
    // }

    // Por ahora, solo mostraremos un mensaje de éxito
    console.log("Datos del formulario:", formData);
    alert("Gracias por tu mensaje. Te contactaremos pronto. (Simulación)");
    e.target.reset();
  } catch (error) {
    console.error("Error:", error);
    alert(
      "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.",
    );
  }
};
