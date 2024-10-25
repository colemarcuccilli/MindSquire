const thumbnailsContainer = document.querySelector('.thumbnails-container');
const numRows = 4;
const thumbnailsPerRow = 5;
const gap = 20;

const thumbnailRanges = [
    { start: 0, end: 10 },
    { start: 11, end: 21 },
    { start: 22, end: 32 },
    { start: 33, end: 43 }
];
// In your script.js, replace the event listener section with this:
for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.className = 'thumbnail-row';
    row.style.top = `${i * (180 + gap)}px`;
    row.style.animation = `scroll${i % 2 === 0 ? 'Left' : 'Right'} ${100 + i * 10}s linear infinite`;
    
    const range = thumbnailRanges[i];
    
    for (let j = 0; j < 2; j++) {
        for (let k = range.start; k <= range.end; k++) {
            const img = document.createElement('img');
            img.src = `thumbnails/youtube_thumbnail_maxres${k ? ` (${k})` : ''}.jpg`;
            img.className = 'thumbnail';
            img.alt = 'Video Thumbnail';
            
            // New event listener approach
            img.onmouseenter = function() {
                this.style.setProperty('filter', 'brightness(0.9)', 'important');
                this.style.setProperty('transform', 'scale(1.1)', 'important');
                this.style.setProperty('z-index', '100', 'important');
            };

            img.onmouseleave = function() {
                const self = this;
                self.style.setProperty('transform', 'scale(1)', 'important');
                self.style.setProperty('z-index', '1', 'important');
                setTimeout(() => {
                    self.style.setProperty('filter', 'brightness(0.3)', 'important');
                }, 3000);
            };

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
// Add this to script.js
// Update the jobDetails object with more roles
const jobDetails = {
    "3D Designer": {
        location: "Indianapolis, IN",
        overview: "Join our creative team to design and create stunning 3D visuals for our content.",
        responsibilities: [
            "Create high-quality 3D models and animations",
            "Collaborate with content creators and producers",
            "Maintain consistent design standards",
            "Meet quick turnaround times while maintaining quality"
        ],
        qualifications: [
            "3+ years of professional 3D design experience",
            "Proficiency in industry-standard 3D software",
            "Strong portfolio demonstrating creative work",
            "Experience with real-time rendering"
        ],
        additionalSkills: [
            "Experience with motion graphics",
            "Knowledge of VFX pipelines",
            "Game engine experience (Unreal/Unity)",
            "Understanding of YouTube content creation"
        ]
    },
    "Assistant Editor": {
        location: "Indianapolis, IN",
        overview: "Support our editing team in creating engaging content that reaches millions.",
        responsibilities: [
            "Edit video content under senior editor guidance",
            "Manage and organize media assets",
            "Assist in sound mixing and color correction",
            "Maintain project organization and workflow"
        ],
        qualifications: [
            "2+ years video editing experience",
            "Proficiency in Adobe Premiere Pro",
            "Strong organizational skills",
            "Ability to meet tight deadlines"
        ],
        additionalSkills: [
            "After Effects knowledge",
            "Sound design experience",
            "Color grading skills",
            "Experience with large media databases"
        ]
    },
    "Camera Operator/Camera Team Producer": {
        location: "Indianapolis, IN",
        overview: "Lead and execute high-quality video production for our dynamic content.",
        responsibilities: [
            "Operate professional camera equipment",
            "Coordinate with production team",
            "Manage camera department workflow",
            "Ensure technical quality of footage"
        ],
        qualifications: [
            "5+ years camera operation experience",
            "Experience with professional cinema cameras",
            "Strong understanding of lighting and composition",
            "Team leadership experience"
        ],
        additionalSkills: [
            "Drone operation certification",
            "Experience with live production",
            "Technical troubleshooting skills",
            "Knowledge of latest camera technology"
        ]
    },
    "Casting Producer": {
        location: "Indianapolis, IN",
        overview: "Find and manage talent for our innovative content productions.",
        responsibilities: [
            "Source and screen potential cast members",
            "Conduct interviews and auditions",
            "Manage talent database",
            "Coordinate with production team"
        ],
        qualifications: [
            "3+ years casting experience",
            "Strong network of contacts",
            "Excellent communication skills",
            "Experience with talent management"
        ],
        additionalSkills: [
            "Background in production",
            "Experience with diversity initiatives",
            "Knowledge of talent contracts",
            "Social media savvy"
        ]
    },
    "Concept Artist": {
        location: "Indianapolis, IN",
        overview: "Create compelling visual concepts for our innovative content.",
        responsibilities: [
            "Develop visual concepts for videos",
            "Create storyboards and mood boards",
            "Collaborate with production team",
            "Maintain consistent visual style"
        ],
        qualifications: [
            "4+ years concept art experience",
            "Strong portfolio of work",
            "Proficiency in digital art tools",
            "Understanding of production pipeline"
        ],
        additionalSkills: [
            "3D modeling knowledge",
            "Traditional art background",
            "Animation experience",
            "VFX understanding"
        ]
    },
    "Creative": {
        location: "Indianapolis, IN",
        overview: "Generate innovative ideas and concepts for viral content.",
        responsibilities: [
            "Develop creative concepts for videos",
            "Write scripts and treatments",
            "Collaborate with production team",
            "Research trends and opportunities"
        ],
        qualifications: [
            "Proven track record of creative success",
            "Strong writing skills",
            "Understanding of viral content",
            "Experience in content creation"
        ],
        additionalSkills: [
            "Video editing skills",
            "Social media expertise",
            "Photography experience",
            "Project management ability"
        ]
    },
    "Creative Producer": {
        location: "Indianapolis, IN",
        overview: "Lead the creative direction and execution of innovative content projects.",
        responsibilities: [
            "Oversee content development",
            "Manage production timeline",
            "Lead creative team",
            "Ensure content quality"
        ],
        qualifications: [
            "5+ years production experience",
            "Team leadership experience",
            "Strong creative vision",
            "Budget management skills"
        ],
        additionalSkills: [
            "Marketing knowledge",
            "Script writing ability",
            "Video editing skills",
            "Experience with YouTube"
        ]
    },
    "Field Recording Mixer": {
        location: "Indianapolis, IN",
        overview: "Capture high-quality audio for our dynamic video content.",
        responsibilities: [
            "Record location sound",
            "Manage audio equipment",
            "Mix live audio",
            "Maintain audio quality standards"
        ],
        qualifications: [
            "3+ years professional audio experience",
            "Proficiency with professional audio equipment",
            "Understanding of audio post-production",
            "Problem-solving skills"
        ],
        additionalSkills: [
            "Music production experience",
            "Post-production mixing skills",
            "Equipment maintenance knowledge",
            "Experience in live events"
        ]
    }
};

function createApplicationModal() {
    const modalHTML = `
        <div class="application-modal">
            <div class="application-container">
                <div class="job-details-side">
                    <h2 class="role-title-display"></h2>
                    <p class="job-location"><i class="fas fa-map-marker-alt"></i> <span class="location-display"></span></p>
                    
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
                    <form id="application-form">
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
                            <label for="additional-info">Do you have any questions for us?</label>
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

function populateJobDetails(roleTitle) {
    const details = jobDetails[roleTitle];
    if (!details) return;

    document.querySelector('.role-title-display').textContent = roleTitle;
    document.querySelector('.location-display').textContent = details.location;
    document.querySelector('.overview-display').textContent = details.overview;

    const responsibilitiesList = document.querySelector('.responsibilities-list');
    responsibilitiesList.innerHTML = details.responsibilities
        .map(item => `<li>${item}</li>`)
        .join('');

    const qualificationsList = document.querySelector('.qualifications-list');
    qualificationsList.innerHTML = details.qualifications
        .map(item => `<li>${item}</li>`)
        .join('');

    const additionalSkillsList = document.querySelector('.additional-skills-list');
    additionalSkillsList.innerHTML = details.additionalSkills
        .map(item => `<li>${item}</li>`)
        .join('');
}

// Function to show modal
function showApplicationModal(roleTitle) {
    let modal = document.querySelector('.application-modal');
    
    // Create modal if it doesn't exist
    if (!modal) {
        createApplicationModal();
        modal = document.querySelector('.application-modal');
        
        // Add close button functionality
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Populate job details
    populateJobDetails(roleTitle);
    
    // Show modal
    modal.style.display = 'flex';
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
        const formData = new FormData(e.target);
        
        try {
            // For now, just show success message
            alert('Application submitted successfully!');
            document.querySelector('.application-modal').style.display = 'none';
        } catch (error) {
            alert('Error submitting application. Please try again.');
        }
    }
});
