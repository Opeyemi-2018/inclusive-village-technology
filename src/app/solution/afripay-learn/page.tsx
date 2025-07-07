import Image from "next/image"


const overview = [
    "Automate end-to-end school administration",
    "Empower teachers, students, parents, and admins",
    "Improve operational efficiency",
    "Support academic excellence",
    "Enable real-time communication across roles",
    "Built for multi-institution scalability",
    "Ideal for: Private schools, tertiary institutions, government-backed programs, and training institutes",
];

const admin = [
    "Admin Control Panel: Manage academic years, timezone, institutional settings",
    "Role-Based Access (RBAC): Assign granular permissions per user type",
    "Staff & Student Management: Add/edit/deactivate users, view logs",
    "Payment Integration: Plug in payment gateways for tuition, fees, etc.",
    "Backup & Restore: Safeguard your institution’s data securely",
];

const communication = [
    "Communication Templates: Standardize SMS and email messages",
    "Internal Messaging: Secure inbox-like system for all users",
    "Announcement Boards: Send school-wide alerts and updates",
    "Complaint Management: Structured feedback and resolution workflows",
];

const operations = [
    "Front Office Management: Digital reception, visitor logs, postal tracking",
    "HR Module: Manage employee designations, directories, and leave workflows",
    "Teacher Management: Assign teachers to departments, classes, and subjects",
    "Guardian Module: Maintain detailed guardian records and student links",
];

const academics = [
    "Curriculum Planning: Organize subjects, sections, and study materials",
    "Lesson Plan Generator: Build and track progress with visual timelines",
    "Class Scheduling: Create flexible timetables for teachers and students",
    "Student Records: Bulk or digital admissions, categorize cohorts",
];

const assessment = [
    "Attendance Tracking: Staff & student attendance with automated alerts",
    "Online Exams: Create exams, use question banks, grade in real-time",
    "Result Management: Auto-generate mark sheets, share via SMS/email",
    "Certificates & ID Cards: Design, issue, and export branded documents",
    "Student Promotions: Automate advancement workflows",
];

const logistics = [
    "Inventory Management: Track stock levels, suppliers, and usage",
    "Asset Tracker: Monitor hardware, vendors, repairs, and maintenance",
    "Library System: Catalog books, manage lending, digital access",
    "Transport Module: Define bus routes, assign drivers, track members",
    "Hostel Management: Allocate rooms, manage residents and facilities",
];

const finance = [
    "Payroll System: Define salary scales, generate slips, track payments",
    "Accounting Suite: Invoices, discounts, overdue fee tracking",
    "Financial Reports: Income/expense analysis, cash flow breakdown",
];

const reports = [
    "Advanced Reporting Tools: Drill-down data on performance, fees, attendance",
    "Export Options: CSV, PDF, XLS formats for offline record-keeping",
    "Media Gallery: Host images, banners, and digital content",
];

const website = [
    "Manage Public Pages: Homepage, About Us, Contact, News",
    "Edit Content Dynamically: No code required",
    "Promote Events: School news, holidays, workshops, and more",
];

const tools = [
    "Awards & FAQs: Manage custom awards and institution-wide FAQs",
    "Scholarship Management: Handle applications, donors, and disbursements",
    "Event Management: Organize and promote workshops, PTA meetings, etc.",
];

const saas = [
    "Secure User Accounts: Password updates, session management",
    "SaaS Controls: Feature tiering, support tickets, billing cycles for multi-client use",
];

const why = [
    "All-in-One System: No more fragmented tools",
    "Cloud-Based: Access securely anytime, anywhere",
    "Modular & Customizable: Use what fits your institution",
    "Real-Time Engagement: Parents, teachers, students stay informed",
    "Data-Driven Decisions: Dashboards and insights drive improvement",
    "Ready for Scale: From single schools to national programs",
];


const AfriPayLearn = () => {
    return (
        <div className="  text-[#0b0b0b] font-inter">
            <div
                className="relative bg-center bg-cover bg-no-repeat flex flex-col gap-3 items-center justify-center text-center h-[80vh] md:h-screen "
                style={{
                    backgroundImage: `url('/afri-learn-2.jpg')`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white"></div>


                <div className="flex items-center gap-2.5 z-10">
                    <p className="text-lg capitalize font-medium ">AfriPay Learn</p>
                    <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="md:text-[34px] max-w-3xl mx-auto text-4xl font-bold font-unbounded uppercase text-black  leading-snug z-10">
                    AfriPay Learn — Education Management System
                </h1>
            </div>


            <div className="space-y-40  lg:px-10 px-3 pt-24">
                <div className=" w-full max-w-[80rem]  mx-auto flex flex-wrap lg:flex-nowrap  lg:gap-32 gap-20">
                    <div className="w-full lg:w-[55%]  space-y-7" >
                        <div>
                            <h1 className="text-2xl lg:text-[27px] uppercase font-unbounded font-bold">All-in-One Platform to Manage & Elevate Learning Institutions</h1>
                            <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                        </div>
                        <p className="text-[18px] ">AfriPay Learn is a robust, scalable, and intuitive Education Management System (EMS) designed to streamline the academic, administrative, financial, and operational workflows of schools and universities. Whether you manage a primary school, secondary school, polytechnic, or a multi-campus university — AfriPay Learn centralizes your operations in one powerful platform.</p>
                        <p className="text-[18px] hidden lg:inline">Built for simplicity and scale, it enables institutions to reduce overhead, enhance stakeholder communication, and deliver exceptional educational experiences.</p>
                    </div>

                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image
                            src="/afri-learn-1.jpg"
                            alt="banking"
                            width={600}
                            height={600}
                            className="rounded-2xl object-cover h-80 w-full"
                        />
                    </div>

                </div>

                {/* === Overview === */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-wrap lg:flex-nowrap lg:gap-32 gap-20 items-start">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className=" font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Overview
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {overview.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image
                            src="/afri-learn-2.jpg"
                            alt="Overview"
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover h-80 w-full"
                        />
                    </div>
                </div>


                <section className="">
                    <div className="w-full  flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-right max-w-3xl">
                            Core Modules & Capabilities
                        </h1>
                    </div>
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* === Administrative & User Management === */}
                        <div className="w-full max-w-[80rem] mx-auto flex flex-wrap lg:flex-nowrap lg:gap-32 gap-20 items-start">
                            <div className="w-full lg:w-[55%] space-y-6">
                                <h2 className=" font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                                    Administrative & User Management
                                    <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                                </h2>
                                <ul className="space-y-3 text-[17px]">
                                    {admin.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="w-full lg:w-[50%] overflow-hidden">
                            <Image
                                src="/afri-learn-3.jpg"
                                alt="Administrative"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover h-80 w-full"
                            />
                        </div> */}
                        </div>

                        {/* === Institutional Communication === */}
                        <div className="w-full max-w-[80rem] mx-auto flex flex-wrap lg:flex-nowrap lg:gap-32 gap-20 items-start">
                            <div className="w-full lg:w-[55%] space-y-6">
                                <h2 className=" font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                                    Institutional Communication
                                    <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                                </h2>
                                <ul className="space-y-3 text-[17px]">
                                    {communication.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="w-full lg:w-[50%] overflow-hidden">
                            <Image
                            src="/afri-learn-4.jpg"
                            alt="Communication"
                            width={600}
                                height={400}
                                className="rounded-2xl object-cover h-80 w-full"
                            />
                        </div> */}
                        </div>

                        {/* === Institutional Operations === */}
                        <div className="w-full max-w-[80rem] mx-auto flex flex-wrap lg:flex-nowrap lg:gap-32 gap-20 items-start">
                            <div className="w-full lg:w-[55%] space-y-6">
                                <h2 className=" font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                                    Institutional Operations
                                    <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                                </h2>
                                <ul className="space-y-3 text-[17px]">
                                    {operations.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="w-full lg:w-[50%] overflow-hidden">
                            <Image
                                src="/afri-learn-1.jpg"
                                alt="Communication"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover h-80 w-full"
                                />
                        </div> */}
                        </div>
                    </div>
                </section>

                {/* Academic Management – image right on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex  flex-col lg:flex-row-reverse lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Academic Management
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {academics.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-2.jpg" alt="Academic Management" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Assessment & Certification – image left on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Assessment & Certification
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {assessment.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-3.jpg" alt="Assessment" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Logistics & Asset Management – image right on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row-reverse lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Logistics & Asset Management
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {logistics.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-4.jpg" alt="Logistics" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Finance & Human Resources – image left on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Finance & Human Resources
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {finance.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-1.jpg" alt="Finance" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Reports & Media – image right on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row-reverse lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Reports & Media
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {reports.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-2.jpg" alt="Reports" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Public-Facing Website Builder – image left on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Public-Facing Website Builder
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {website.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-3.jpg" alt="Website" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Additional Tools – image right on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row-reverse lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Additional Tools
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {tools.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-4.jpg" alt="Tools" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* User Access & SaaS Subscription – image left on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            User Access & SaaS Subscription
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {saas.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-1.jpg" alt="SaaS" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

                {/* Why Choose AfriPay Learn – image right on desktop */}
                <div className="w-full max-w-[80rem] mx-auto flex flex-col lg:flex-row-reverse lg:gap-32 gap-20 items-center">
                    <div className="w-full lg:w-[55%] space-y-6">
                        <h2 className="font-unbounded font-bold text-2xl lg:text-[27px] uppercase relative inline-block">
                            Why Choose AfriPay Learn?
                            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-600 block mt-2"></span>
                        </h2>
                        <ul className="space-y-3 text-[17px]">
                            {why.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-black inline-block"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image src="/afri-learn-2.jpg" alt="Why Choose Us" width={600} height={400} className="rounded-2xl object-cover h-80 w-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AfriPayLearn