// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
}

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// WhatsApp Form Logic
document.getElementById('waForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const msg = document.getElementById('msg').value;

    const text = `*New Enrollment Inquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Course:* ${course}%0A*Notes:* ${msg}`;
    
    // Using window.open to open in new tab
    window.open(`https://wa.me/918867080248?text=${text}`, '_blank');
});