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
            
            img.addEventListener('mouseenter', function() {
                this.style.setProperty('filter', 'brightness(0.9)', 'important');
                this.style.setProperty('transform', 'scale(1.1)', 'important');
                this.style.setProperty('z-index', '100', 'important');
            });

            img.addEventListener('mouseleave', function() {
                const self = this;
                self.style.setProperty('transform', 'scale(1)', 'important');
                self.style.setProperty('z-index', '1', 'important');
                setTimeout(() => {
                    self.style.setProperty('filter', 'brightness(0.3)', 'important');
                }, 3000);
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
        overview: "We are looking for a motivated video editor to work in the earlier stages of the editing process. This role will start post production off on the right track. This role focuses less on complex editing techniques, and focuses more on shaping the story, ordering segments, and creating an entertaining YouTube video!",
        responsibilities: [
            "Responsible for transforming raw footage into rough draft cuts",
            "Synching, Cutting, Optimizing, Ordering, ETC.",
            "Organizing Premiere Pro project",
            "Work alongside us during the edit to ensure the video is heading in the right direction",
            "Responsibilities will expand over time"
        ],
        qualifications: [
            "Fluent and experienced in Premiere Pro",
            "Great Communicator",
            "Watches and loves YouTube",
            "Wants to work long term and believes in the vision of our channel",
            "Want to grow their editing skills and social media knowledge"
        ],
        additionalSkills: [
            "Detail Oriented",
            "Organizational Skills",
            "Great sense of humor",
            "Must be 18+ and fluent in English"
        ]
    },
    "GFX / Sound Design Editor": {
        overview: "We are looking for an experienced video editor to help us turn a rough cut into a polished, high-quality video. Attention to detail is essential, as we need someone who values precision in every aspect of editing. If you're skilled in creating clean, professional looking graphics and have a talent for crafting amazing, captivating sound design, this role is perfect for you!",
        responsibilities: [
            "Responsible for turning a rough cut video into a finished product",
            "Graphics, Sound design, Captions, Framing, ETC.",
            "Responsibilities will expand over time"
        ],
        qualifications: [
            "Fluent and experienced in Premiere Pro and preferably After Effects",
            "Great Communicator",
            "Watches and loves YouTube",
            "Wants to work long term and believes in the vision of our channel",
            "Wants to grow their editing skills and social media knowledge"
        ],
        additionalSkills: [
            "Very Detail Oriented",
            "Organizational Skills",
            "Great sense of humor",
            "Must be 18+ and fluent in English"
        ]
    },
    "Creative Producer": {
        overview: "We are looking for a creative, funny, and motivated person to help us plan and produce the best videos we possibly can. We need someone who is great at coming up with ideas, as well as helping execute them, and staying organized.",
        responsibilities: [
            "Collaborate with us and our team to help plan and produce an entire video",
            "Creatively brainstorm and help plan each part of our videos",
            "Segment Ideas, Video Structure, Funny Ideas, Jokes, ETC.",
            "Find people, props, locations, and anything that will be needed for each video"
        ],
        qualifications: [
            "EXCELLENT Communicator",
            "Comfortable with talking to strangers (phone calls, etc.)",
            "LOVES YouTube. Watches it alot, or experience working on videos",
            "Leadership qualities",
            "Wants to work long term and believes in the vision of our channel"
        ],
        additionalSkills: [
            "Detail Oriented",
            "Organizational Skills",
            "Great sense of humor",
            "Must be 18+ and fluent in English"
        ]
    },
    "Head of Short Form Content": {
        overview: "We need someone to manage and oversee all of our short form content. You will help create short form content to be posted on all platforms (YouTube Shorts, TikTok, Instagram).",
        responsibilities: [
            "Ideate and plan original short form content ideas",
            "Turn our long form videos into multiple short form videos (via editing)",
            "Manage and train short form editors",
            "Post and manage accounts"
        ],
        qualifications: [
            "Fluent and experienced in Premiere Pro",
            "Knowledgeable in short form content",
            "Great Communicator",
            "Leadership qualities",
            "Creative"
        ],
        additionalSkills: [
            "Stays up to date with short form content and trends",
            "Detail Oriented",
            "Organizational Skills",
            "Great sense of humor",
            "Must be 18+ and fluent in English"
        ]
    },
    "Short Form Editor": {
        overview: "Responsible for editing short form videos for MindSquire accounts (YT Shorts, TikTok, Instagram)",
        responsibilities: [
            "Turn horizontal long form videos into 60 second vertical clips",
            "Caption videos",
            "Add Sound design",
            "Optimize long form footage for short form"
        ],
        qualifications: [
            "Fluent and experienced in Premiere Pro",
            "Understanding of short form content",
            "Great Communicator",
            "Detail Oriented"
        ],
        additionalSkills: [
            "Sound design experience",
            "Social media knowledge",
            "Great sense of humor",
            "Must be 18+ and fluent in English"
        ]
    },
    "Head of Operations": {
        overview: "This is arguably the most important role we are needing to fill. We're looking for someone to join our team as a key member. You will eventually help run various operations that go into growing our YouTube channel. You will be trained over a LONG period of time in every aspect of our business - from what makes a good thumbnail, to BTS business, to storytelling and retention.",
        responsibilities: [
            "Learn and manage all aspects of YouTube operations",
            "Develop strategies for channel growth",
            "Oversee content planning and execution",
            "Manage team workflows and processes"
        ],
        qualifications: [
            "Wants to learn as much as possible about YouTube, business, and creating content",
            "Wants to dedicate their time to helping run our YouTube channel",
            "Strong leadership and communication skills",
            "Passionate about content creation"
        ],
        additionalSkills: [
            "Project management experience",
            "Strategic thinking",
            "Adaptable and eager to learn",
            "Must be 18+ and fluent in English"
        ]
    },
    "Open Application": {
        overview: "If you think you have a special set of skills that would be beneficial to our content, but you don't see a role currently listed that fits your background, we'd love to hear from you! Tell us about your unique talents and how you could contribute to our team.",
        responsibilities: [
            "To be defined based on your unique skills and our needs",
            "Opportunity to create and shape your own role",
            "Contribute to channel growth in your area of expertise"
        ],
        qualifications: [
            "Passion for YouTube content creation",
            "Strong communication skills",
            "Self-motivated and proactive",
            "Creative problem solver"
        ],
        additionalSkills: [
            "Any relevant skills or experience",
            "Must be 18+ and fluent in English",
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
                    
                    <div class="job-section">
                        <h3>Additional Skills (Preferred)</h3>
                        <ul class="additional-skills-list"></ul>
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
                            <label for="resume">Resume/CV *</label>
                            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="cover-letter">Cover Letter *</label>
                            <input type="file" id="cover-letter" name="cover-letter" accept=".pdf,.doc,.docx" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="portfolio">Portfolio URL</label>
                            <input type="url" id="portfolio" name="portfolio">
                        </div>
                        
                        <div class="form-group">
                            <label for="additional-info">Why do you want to join our team? *</label>
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
    
    document.querySelector('.role-title-display').textContent = roleTitle;
    document.querySelector('.overview-display').textContent = details.overview;
    document.querySelector('#role-input').value = roleTitle;

    document.querySelector('.responsibilities-list').innerHTML = 
        details.responsibilities.map(item => `<li>${item}</li>`).join('');
    
    document.querySelector('.qualifications-list').innerHTML = 
        details.qualifications.map(item => `<li>${item}</li>`).join('');
    
    document.querySelector('.additional-skills-list').innerHTML = 
        details.additionalSkills.map(item => `<li>${item}</li>`).join('');
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