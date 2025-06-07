document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('loggedInUser')) {
    alert('Anda harus login untuk mengakses halaman profil.');
    window.location.href = 'login.html'; 
    return;
  }

  const logoutButton = document.getElementById('logout-btn');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('loggedInUser');
      alert('Anda telah berhasil logout.');
      window.location.href = '../index.html';
    });
  }
});