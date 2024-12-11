// Initialize thumbnail variables
const thumbnailsContainer = document.querySelector('.thumbnails-container');
const numRows = 4;
const thumbnailsPerRow = 5;
const gap = 20;

// Thumbnail ranges
const thumbnailRanges = [
    { start: 0, end: 10 },
    { start: 11, end: 21 },
    { start: 22, end: 32 },
    { start: 33, end: 43 }
];

// Initialize thumbnails
for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.className = 'thumbnail-row';
    row.style.top = `${i * (180 + gap)}px`;
    row.style.animation = `scroll${i % 2 === 0 ? 'Left' : 'Right'} ${100 + i * 10}s linear infinite`;
    
    const range = thumbnailRanges[i];
    
    // Create thumbnails for this row
    for (let j = 0; j < 2; j++) {
        for (let k = range.start; k <= range.end; k++) {
            const img = document.createElement('img');
            img.src = `thumbnails/youtube_thumbnail_maxres${k ? ` (${k})` : ''}.jpg`;
            img.className = 'thumbnail';
            img.alt = 'Video Thumbnail';
            img.loading = 'lazy';
            
            // Inside the thumbnail creation loop
            // Inside the thumbnail creation loop
            img.addEventListener('mouseenter', function() {
                this.classList.add('lit');
                this.style.transition = 'all 0.3s ease';
            });

            img.addEventListener('mouseleave', function() {
                const self = this;
                self.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                    if (!self.matches(':hover')) {
                        self.classList.remove('lit');
                    }
                }, 2500);
            });

            row.appendChild(img);
        }
    }
    
    thumbnailsContainer.appendChild(row);
}

// Squiggly line animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.squiggly').classList.add('visible');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Job details data
const jobDetails = {
    "Assistant Editor": {
        overview: "About The Role:\n\nWe are looking for a motivated video editor to work in the earlier stages of the editing process. This role will start post production off on the right track. This role focuses less on complex editing techniques, and focuses more on shaping the story.",
        responsibilities: [
            "Responsible for transforming raw footage into rough draft cuts",
            "Synching, Cutting, Optimizing, Ordering, ETC.",
            "Organizing Premiere Pro project",
            "Work alongside us during the edit to ensure the video is heading in the right direction",
            "Responsibilities will expand over time"
        ],
        idealCandidate: [
            "Fluent and experienced in Premiere Pro",
            "Great Communicator",
            "Watches and loves YouTube",
            "Wants to work long term and believes in the vision of our channel",
            "Want to grow their editing skills and social media knowledge",
            "Detail Oriented",
            "Organizational Skills",
            "Great sense of humor"
        ]
    },
    "GFX / Sound Design Editor": {
        overview: "About The Role:\n\nWe are looking for an experienced video editor to help us turn a rough cut into a polished, high-quality video. Attention to detail is essential, as we need someone who values precision in every aspect of editing. If you're skilled in creating clean, professional looking graphics and have a talent for crafting amazing, captivating sound design, this role is perfect for you!",
        responsibilities: [
            "Responsible for turning a rough cut video into a finished product",
            "Graphics, Sound design, Captions, Framing, ETC.",
            "Responsibilities will expand over time"
        ],
        idealCandidate: [
            "Fluent and experienced in Premiere Pro and preferably After Effects",
            "Great Communicator",
            "Watches and loves YouTube",
            "Wants to work long term and believes in the vision of our channel",
            "Wants to grow their editing skills and social media knowledge",
            "Very Detail Oriented",
            "Organizational Skills",
            "Great sense of humor"
        ]
    },
    "Creative Producer": {
        overview: "About this role:\n\nWe are looking for a creative, funny, and motivated person to help us plan and produce the best videos we possibly can. We need someone who is great at coming up with ideas, as well as helping execute them, and staying organized. If you are someone who possesses these traits, this role is a great fit for you!",
        responsibilities: [
            "Creatively brainstorm and help plan each part of our videos.",
            "This includes segment ideas, video structure, jokes, etc.",
            "Find people, props, locations, and anything that will be needed for each video."
        ],
        idealCandidate: [
            "EXCELLENT Communicator",
            "Comfortable with talking to strangers (phone calls, etc.)",
            "LOVES YouTube. Watches it a lot, or experience working on videos",
            "Leadership qualities",
            "Wants to work long term and believes in the vision of our channel",
            "Wants to grow their video creation skills and social media knowledge",
            "Detail Oriented",
            "Organizational Skills",
            "Great sense of humor"
        ]
    },
    "Head of Short Form Content": {
        overview: "About the role:\n\nWe need someone to manage and oversee all of our short form content. You will help create short form content to be posted on all platforms (YouTube Shorts, TikTok, Instagram).",
        responsibilities: [
            "Ideate and plan original short form content ideas",
            "Turn our long form videos into multiple short form videos (via editing)",
            "Manage and train short form editors",
            "Post and manage accounts"
        ],
        idealCandidate: [
            "Fluent and experienced in Premiere Pro",
            "Knowledgeable in short form content",
            "Great Communicator",
            "Leadership qualities",
            "Creative",
            "Stays up to date with short form content and trends",
            "Wants to work long term and believes in the vision of our channel",
            "Wants to grow their skills and social media knowledge",
            "Detail Oriented",
            "Organizational Skills",
            "Great sense of humor"
        ]
    },
    "Short Form Editor": {
        overview: "What you will do:\n\nResponsible for editing short form videos for MindSquire accounts (YT Shorts, TikTok, Instagram).",
        responsibilities: [
            "Turn horizontal long form videos into 60 second vertical clips",
            "Caption videos",
            "Add sound design",
            "Optimize long form footage for short form"
        ],
        idealCandidate: [
            "Fluent and experienced in Premiere Pro",
            "Understanding of short form content",
            "Great Communicator",
            "Detail Oriented",
            "Sound design experience",
            "Social media knowledge",
            "Great sense of humor"
        ]
    },
    "Head of Operations": {
        overview: "This is arguably the most important role we are needing to fill. We’re looking for someone to join our team as a key member. You will eventually help run various operations that go into growing our YouTube channel. We need someone who has a borderline insane desire to learn and grow in the YouTube space.\n\nYou will be trained over a LONG period of time in every aspect of our business. This is everything from what makes a good thumbnail, to BTS business, to storytelling and retention.\n\nIf this interests you, apply below.",
        idealCandidate: [
            "Wants to learn as much as possible about YouTube, business, and creating content",
            "Wants to dedicate their time to helping run our YouTube channel",
            "Strong leadership and communication skills",
            "Passionate about content creation",
            "Project management experience",
            "Strategic thinking",
            "Adaptable and eager to learn"
        ]
    },
    "Open Application": {
        overview: "If you think you have a special set of skills that would be beneficial to our content, but you don’t see a role currently listed that fits your background, use this application to submit your resume, portfolio, or whatever information that may be applicable!",
        idealCandidate: [
            "Passion for YouTube content creation",
            "Strong communication skills",
            "Self-motivated and proactive",
            "Creative problem solver",
            "Willingness to learn and grow with the team"
        ]
    }
};

// Create application modal
function createApplicationModal() {
    const modalHTML = `
        <div class="application-modal">
            <div class="application-container">
                <div class="job-details-side">
                    <h2 class="role-title-display"></h2>
                    
                    <div class="job-section">
                        <h3>Overview</h3>
                        <p class="overview-display"></p>
                    </div>
                    
                    <div class="job-section">
                        <h3>Key Responsibilities</h3>
                        <ul class="responsibilities-list"></ul>
                    </div>
                    
                    <div class="job-section">
                        <h3>Qualifications</h3>
                        <ul class="qualifications-list"></ul>
                    </div>
                    
                </div>

                <div class="application-form-side">
                    <span class="close-btn">&times;</span>
                    <h2>Submit Your Application</h2>
                    <form 
                        id="application-form" 
                        action="https://formspree.io/f/xwpkvvyq"
                        method="POST"
                        enctype="multipart/form-data"
                        accept-charset="UTF-8"
                    >
                        <input type="hidden" name="_subject" value="New job application">
                        <input type="hidden" name="role" id="role-input">
                        
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        
                        <div class="form-group">
                            <label for="portfolio">YouTube Channel, Portfolio, or Website URL</label>
                            <input type="text" id="portfolio" name="portfolio">
                        </div>
                        <div class="form-group">
                            <label for="social handles">Social Media Handles</label>
                            <input type="text" id="social handles" name="social handles">
                        </div>
                        <div class="form-group">
                            <label for="resume">Resume/CV</label>
                            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
                        </div>
                        
                        <div class="form-group">
                            <label for="cover-letter">Cover Letter</label>
                            <input type="file" id="cover-letter" name="cover-letter" accept=".pdf,.doc,.docx">
                        </div>
                        <div class="form-group">
                            <label for="age-confirm">Are You 18 Years or Older? *</label>
                            <select id="age-confirm" name="age-confirm" required>
                                <option value="" disabled selected>Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="additional-info">What makes you a great candidate for this position? Why do you want to join our team?</label>
                            <textarea id="additional-info" name="additional-info" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Modal management functions
function populateJobDetails(roleTitle) {
    const details = jobDetails[roleTitle];
    if (!details) return;

    // Remove any existing modal
    const existingModal = document.querySelector('.application-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create new modal and populate
    createApplicationModal();

    // Set title and disclaimer at the top
    document.querySelector('.role-title-display').textContent = roleTitle;
        // Customize disclaimer based on role
    let disclaimerText = "";
    if (roleTitle !== "Head of Operations" && roleTitle !== "Open Application" && roleTitle !== "Head of Short Form Content") {
        disclaimerText = '<span class="disclaimer">Remote Position, Paid Per Project, Must be 18+ and fluent in English</span><br><br>';
    } else {
        disclaimerText = '<span class="disclaimer">Must be 18+ and fluent in English</span><br><br>';
    }
    
    document.querySelector('.overview-display').innerHTML = `
        ${disclaimerText}
        ${details.overview}
    `;
    document.querySelector('#role-input').value = roleTitle;
    // Added this new code block in populateJobDetails function
    // Update the application question for Open Application
    if (roleTitle === "Open Application") {
        document.querySelector('label[for="additional-info"]').textContent = "What value can you add to our company or content?";
    } else {
        document.querySelector('label[for="additional-info"]').textContent = "What makes you a great candidate for this position? Why do you want to join our team?";
    }
    // Use fallback empty array if responsibilities or idealCandidate is undefined
    const responsibilitiesSection = document.querySelector('.responsibilities-list').parentElement;

    if (details.responsibilities && details.responsibilities.length > 0) {
        document.querySelector('.responsibilities-list').innerHTML = 
            details.responsibilities.map(item => `<li>${item}</li>`).join('');
        responsibilitiesSection.style.display = '';
    } else {
        document.querySelector('.responsibilities-list').innerHTML = '';
        responsibilitiesSection.style.display = 'none';
    }

    document.querySelector('.qualifications-list').innerHTML = 
        (details.idealCandidate || []).map(item => `<li>${item}</li>`).join('');
    document.querySelector('.qualifications-list').previousElementSibling.textContent = "Ideal Candidate";
}


function showApplicationModal(roleTitle) {
    // First create/update the modal
    populateJobDetails(roleTitle);
    
    // Then find it and show it
    const modal = document.querySelector('.application-modal');
    if (modal) {
        // Add close button functionality
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        
        modal.style.display = 'flex';
    }
}

// Add click handlers to role cards
document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
        const roleTitle = card.querySelector('.role-title').textContent;
        showApplicationModal(roleTitle);
    });
});



// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.querySelector('.application-modal');
    if (modal && e.target === modal) {
        modal.style.display = 'none';
    }
});
// Handle form submission
document.addEventListener('submit', async (e) => {
    if (e.target.id === 'application-form') {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        try {
            // Add loading state
            const submitButton = form.querySelector('.submit-btn');
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
                mode: 'cors',
                credentials: 'same-origin'
            });
            
            if (response.ok) {
                alert('Application submitted successfully! We will be in touch soon.');
                document.querySelector('.application-modal').style.display = 'none';
                form.reset();
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit application');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Error submitting application. Please try again or contact us directly at mindsquirejobs@gmail.com');
        } finally {
            // Reset button state
            const submitButton = form.querySelector('.submit-btn');
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Application';
        }
    }
});
