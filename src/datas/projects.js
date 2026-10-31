const projectsImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true });
const allStacksImage = import.meta.glob('../assets/stacks/*.{svg,png,jpg,jpeg,webp}', { eager: true });

const getImagePath = (filename) => {
    const path = `../assets/projects/${filename}`;
    return projectsImages[path]?.default || null;
}

const getStackIconPath = (filename) => {
    const path = `../assets/stacks/${filename}`;
    return allStacksImage[path]?.default || null;
}

export const projects = [
    {
        "id": 1,
        "title": "Mommy's Variety Store",
        "sub-title": "Desktop Application for Inventory Management, and Kiosk ready POS System",
        "category": "Academic",
        "image": getImagePath('variety-store-menu.png'),
        "team-size": 2,
        "time-line": 3,
        "my-role": "Frontend Developer",
        "tech-stacks":[
            {"label": "Java", "icon": getStackIconPath('java.svg')},
            {"label": "MS SQL", "icon": getStackIconPath('mssql.svg')}
        ],
        "overview": "Mommy's Variety Store Management System is a desktop application built with Java Swing for the graphical user interface (GUI) and Microsoft SQL Server as the primary database. The application is designed to manage inventory, categories, and other store-related operations. It also supports a legacy connection to Microsoft Access for backward compatibility with earlier database versions. This project is developed as part of a BSIT (Bachelor of Science in Information Technology) course requirement.",
        "features": [
            {"label": "Login System", "description": "A secure login system prevents unauthorized and unregistered users from accessing the platform."},
            {"label": "Courier Management System", "description": "Allows administrators to add, edit, or delete riders, and filter based on availability."},
            {"label": "Stock Management System", "description": "Enables administrators to adjust stock quantities and reorder items as needed. It also highlights low-stock items."},
            {"label": "Cart Management", "description": "Users can manage their shopping cart and retain cart contents even after logging out."},
            {"label": "Improved UI/UX Experience", "description": "Enhanced user interface design to ensure ease of use and a seamless shopping experience."},
            {"label": "Administrator Dashboard", "description": "Real-time statistics and data visualization for administrators, including user count, total revenue, and sales metrics."}
        ],
        "problem-solution": "The development process addressed key challenges in scalability, architecture, and user experience. The team successfully migrated the database from MS Access to SQL Server using JDBC, ensuring robust connectivity. To maintain code quality in a collaborative environment, we enforced the MVC pattern and strict Git workflows. Furthermore, the user interface underwent a complete overhaul; using Figma for prototyping, we transitioned from basic JOptionPane inputs to a fully interactive Java Swing interface, significantly enhancing usability and design consistency.",
        "project-links": {
            "github": "https://github.com/Jerson-Valdez/BSIT2FG2_PROJECT_IM-OOP-EDP-ADB-IDA.git",
            "live-demo": "#"
        }
    },
    {
        "id": 2,
        "title": "CICT-PPMP",
        "sub-title": "An AI-enhanced project procurement management system for optimized budget reallocation.",
        "category": "Capstone",
        "image": getImagePath('cict-ppmp.png'),
        "team-size": 5,
        "time-line": "6 Months",
        "my-role": "Full-Stack Developer",
        "tech-stacks":[
            {"label": "React", "icon": getStackIconPath('react.svg')},
            {"label": "TypeScript", "icon": getStackIconPath('typescript.svg')},
            {"label": "Python", "icon": getStackIconPath('python.svg')},
            {"label": "Django", "icon": getStackIconPath('django.svg')},
            {"label": "Supabase", "icon": getStackIconPath('supabase.svg')}
        ],
        "overview": "The CICT-PPMP is a web-based procurement system designed to transform manual university budget tracking into a centralized, secure platform. It integrates the custom ALAB Engine—a machine learning module utilizing Random Forest and Knapsack algorithms—to analyze historical procurement data and recommend 'In-Lieu' budget reallocations. Built with strict adherence to ISO/IEC 25010:2023 and IAS 2 security standards, the platform provides administrators with an intuitive interface to manage PPMP spreadsheets, track purchase requests, and ensure transparent, data-driven financial decision-making.",
        "features": [
            {"label": "AI-Assisted Reallocation (ALAB Engine)", "description": "Utilizes a Random Forest algorithm to analyze historical item utilization and recommend underutilized equipment for safe budget deduction."},
            {"label": "Secure Spreadsheet Ingestion", "description": "Features a multi-stage Excel file uploader with strict 6-parameter schema mapping and validation to securely parse PPMP data without server crashes."},
            {"label": "Immutable Audit Trail", "description": "Maintains a real-time Procurement Timeline that logs every upload, export, and budget approval with exact user attribution and timestamps."},
            {"label": "Role-Based Access Control (RBAC)", "description": "Enforces strict privilege separation between Administrators and Standard Users to secure AI retraining, user management, and budget approvals."},
            {"label": "Granular Data Export & Backup", "description": "Provides a 7-module backup utility allowing administrators to generate full or partial dataset snapshots for immediate disaster recovery."}
        ],
        "problem-solution": "To address the inefficiencies of manual spreadsheet-based budget tracking, I engineered an AI-driven Decision Support System using React, Python, and Supabase. The core challenge was safely identifying 'dead-weight' budget allocations without violating strict university procurement regulations. By integrating a machine learning classification model alongside an immutable audit trail and multi-layered security controls, I delivered a highly secure, ISO-compliant platform that automates budget tracking and empowers administrators to make confident, data-backed reallocation decisions.",
        "project-links": {
            "github": "https://github.com/Jerson-Valdez/CICT-PPMP.git",
            "live-demo": "https://cict-ppmp.vercel.app/"
        }
    },
    {
        "id": 3,
        "title": "Laundry Shop Management System",
        "sub-title": "A modern, efficient, and student-centered web and mobile platform for small to medium-sized laundry shops.",
        "category": "Academic",
        "image": getImagePath('labable.png'),
        "team-size": 5,
        "time-line": 2,
        "my-role": "Full Stack Developer",
        "tech-stacks":[
            {"label": "React", "icon": getStackIconPath('react.svg')},
            {"label": "Javascript", "icon": getStackIconPath('js.svg')},
            {"label": "HTML5", "icon": getStackIconPath('html5.svg')},
            {"label": "CSS3", "icon": getStackIconPath('css3.svg')},
            {"label": "Firebase", "icon": getStackIconPath('firebase.svg')}
        ],
        "overview": "Labable is a comprehensive laundry management ecosystem designed to modernize operations for small-to-medium businesses near university campuses. Integrating both Transaction Processing (TPS) and Management Information Systems (MIS), the platform bridges the gap between service providers and customers. It features a cross-platform mobile app for students to schedule and track services, alongside a web-based administration dashboard for owners to manage orders, automate payments, and analyze financial performance.",
        "features": [
            {"label": "Login System", "description": "A secure login system prevents unauthorized and unregistered users from accessing the platform."},
            {"label": "User Management", "description": "Add, Update, Delete, and View Users with different roles and permissions."},
            {"label": "Account Receivables Management", "description": "Manage member accounts, track receivables, and generate reports."},
            {"label": "Transaction History", "description": "View detailed transaction history for each member."},
            {"label": "Notifications and Alerts", "description": "Receive notifications for due payments and important updates via email, toast notifications, and alerts."}
        ],
        "problem-solution": "Small laundry businesses often rely on error-prone manual logbooks, leading to lost data, operational bottlenecks, and a lack of transparency for customers. To resolve this, we developed Labable, a web and mobile solution utilizing React.js and Firebase. The system digitizes the entire workflow—replacing paper records with automated CRUD operations, real-time order tracking, and dynamic sales reporting—resulting in improved operational efficiency and a seamless customer experience.",
        "project-links": {
            "github": "https://github.com/caetachi/labable.git",
            "live-demo": "https://labable.web.app/"
        }
    },
]