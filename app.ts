interface ContactInfo {
    title: string;
    email: string;
    phone: string;
    socialLinks: { platform: string; url: string }[];
}

const contactInfo: ContactInfo = {
    title: 'CONTACT',
    email: 'chaud9309@gmail.com',
    phone: '0359771164',
    socialLinks: [
        { platform: 'Facebook', url: '#home' },
        { platform: 'Instagram', url: '#home' },
        { platform: 'Twitter', url: '#home' },
    ]
};

function renderContact() {
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.innerHTML = `
        <h2>${contactInfo.title}</h2>
        <p>Email: <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
        <p>SĐT: <a href="tel:${contactInfo.phone}">${contactInfo.phone}</a></p>
        <div class="socials">
            ${contactInfo.socialLinks.map(link => `<a href="${link.url}" target="_blank">${link.platform}</a>`).join(' ')}
        </div>
    `;
    
    document.body.appendChild(contactSection);
}

renderContact();
