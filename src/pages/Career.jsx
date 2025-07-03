import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerImage from "../assets/bannerCareer.jpg";
import Banner from "../components/common/Banner";
import Underline from "../components/ui/Underline";
import CloseIcon from "@mui/icons-material/Close";
import {
  Typography,
  Card,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  FormLabel,
  Alert,
  IconButton,
  TextField,
} from "@mui/material";

const textFieldStyle = {
  "& .MuiFilledInput-root": {
    backgroundColor: "#EEF9FF",
    "&:hover": {
      backgroundColor: "#EEF9FF",
    },
    "&.Mui-focused": {
      backgroundColor: "#EEF9FF",
    },
  },
  "& .MuiFormLabel-root": {
    color: "#6B6A75",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#83d1ed",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#83d1ed",
  },
};

const jobData = [
  {
    title: "Business Development Executive",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We are looking for a passionate and self-motivated Business Development Executive (BDE) to join our dynamic team.",
    keyResponsibilities: [
      "Identify and pursue new business opportunities through various business platforms.",
      "Generate leads, pitch services, and set up meetings with potential clients.",
      "Support the sales team in creating proposals and presentations for prospective clients.",
      "Maintain and update CRM tools with accurate client and lead information.",
      "Coordinate with internal teams to ensure smooth onboarding of new clients.",
      "Conduct market research to identify trends and potential growth areas.",
      "Participate in client calls, demos, and follow-ups under supervision.",
    ],
    skillsQualifications: [
      "Bachelor's degree in BBA, MBA, BCA, MCA, BE, B.Tech or relevant degree.",
      "Strong communication (Verbal + Written).",
      "Basic or minimal understanding of IT services and solutions is a plus.",
      "Quick learner with a positive attitude and a growth mindset.",
    ],
  },
  {
    title: "Human Resources Manager",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We are looking for a motivated and detail-oriented HR Executive with 0–1 year of experience to join our team at Jawam Infotech. This role offers an excellent opportunity to kick-start your HR career by gaining hands-on experience in recruitment, onboarding, employee engagement, and HR operations.",
    keyResponsibilities: [
      "Assist in end-to-end recruitment processes: Posting on various platforms, sourcing, screening, scheduling, and onboarding.",
      "Maintain and update employee records and other HR relevant databases.",
      "Support employee engagement activities and internal communications.",
      "Coordinate training sessions and performance review processes.",
      "Ensure compliance with HR policies and company standards.",
      "Collaborate with other departments to foster a positive work environment.",
    ],
    skillsQualifications: [
      "Degree in BBA, MBA, BCA, MCA, BE, B.Tech or any relevant degree.",
      "0–1 year of experience in HR or internships in a similar domain.",
      "Excellent communication and interpersonal skills.",
      "Strong organizational and multitasking abilities.",
      "Proficiency in MS Office; knowledge of HRIS is a plus.",
      "A proactive mindset and eagerness to learn and grow.",
    ],
  },
  {
    title: "Full Stack Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We're seeking a Full Stack Developer who is equally comfortable building sleek frontends and robust backends. You will work across React.js (web), React Native (mobile), and Node.js (server) to develop responsive applications that are fast, scalable, and secure.",
    keyResponsibilities: [
      "Design and develop front-end UIs using React.js for web apps.",
      "Build cross-platform mobile apps using React Native.",
      "Develop and maintain Node.js backends and APIs.",
      "Integrate third-party services and RESTful APIs.",
      "Collaborate with designers, PMs, and QA teams to deliver features.",
      "Ensure code quality, performance, and security in all layers.",
      "Participate in sprint planning, code reviews, and deployment cycles.",
    ],
    skillsQualifications: [
      "1–4 years of full-stack development experience.",
      "Strong hands-on experience in React.js, React Native, and Node.js.",
      "Deep understanding of JavaScript (ES6+), HTML5, CSS3, Tailwind CSS.",
      "Proficient in REST API development and integration.",
      "Experience with MongoDB / PostgreSQL.",
      "Version control using Git and familiarity with CI/CD pipelines.",
    ],
  },
  {
    title: "Mern Stack Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We're looking for a skilled MERN Stack Developer to join our growing team. You’ll be working on full-cycle web development projects using MongoDB, Express.js, React.js, and Node.js, building modern, high-performance applications that solve real-world business problems.",
    keyResponsibilities: [
      "Develop end-to-end web applications using the MERN stack.",
      "Build reusable, responsive UI components using React.js.",
      "Create robust backend services and RESTful APIs with Node.js and Express.js.",
      "Work with MongoDB for data modeling, queries, and performance optimization.",
      "Collaborate with product managers, designers, and other developers.",
      "Write clean, maintainable, and secure code.",
      "Optimize applications for maximum speed and scalability.",
      "Debug, test, and deploy applications in a production environment.",
    ],
    skillsQualifications: [
      "1–4 years of hands-on experience as a Full Stack Developer using MERN Stack.",
      "Proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB.",
      "Experience in RESTful API design and integration.",
      "Good understanding of HTML5, CSS3, and Tailwind CSS or Bootstrap.",
      "Familiarity with Git, GitHub, and basic CI/CD pipelines.",
      "Strong problem-solving and debugging skills.",
      "Good communication and team collaboration abilities.",
    ],
  },
  {
    title: "React Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We’re looking for a passionate React.js Developer with 1–3 years of experience to join our front-end team. You’ll be working on modern, responsive web applications using React.js, Tailwind CSS, and Storybook.This is a great opportunity to grow your front-end skills and contribute toreal-world projects in a fast-paced environment.",
    keyResponsibilities: [
      "Develop responsive, interactive user interfaces using React.js.",
      "Build and manage reusable UI components with Storybook.",
      "Apply Tailwind CSS to style components and ensure visual consistency.",
      "Integrate front-end interfaces with RESTful APIs or GraphQL services.",
      "Collaborate with UI/UX designers, back-end developers, and QA teams.",
      "Optimize code for speed, performance, and scalability.",
      "Participate in code reviews, team discussions, and agile ceremonies.",
    ],
    skillsQualifications: [
      "1–3 years of professional experience in React.js development.",
      "Strong understanding of JavaScript (ES6+), HTML5, and CSS3.",
      "Experience with Tailwind CSS for modern UI development.",
      "Familiarity with Storybook for component management.",
      "Basic understanding of state management (Redux, Context API, Zustand).",
      "Knowledge of React hooks, component lifecycle, and functional programming concepts.",
      "Experience working with REST APIs, Git, and version control workflows.",
      "Good debugging and browser compatibility skills.",
    ],
  },
  {
    title: "React Native Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We’re hiring a React Native Developer with 1–4 years of experience to work on a high-impact mobile platform. This platform powers large-scale live events and includes advanced features like secure payments and quantum-resistant wallet integrations.",
    keyResponsibilities: [
      "Develop cross-platform mobile apps using React Native.",
      "Integrate and manage APIs for event systems, wallets, and secure payments.",
      "Build scalable backend services using Node.js (or Python).",
      "Collaborate with teams to implement secure data handling using ExeQuantum’s post-quantum cryptography APIs.",
      "Participate in Agile sprints, feature planning, and regular releases.",
      "Optimize app performance, reliability, and scalability for real-world usage.",
    ],
    skillsQualifications: [
      "Bachelor's degree in BBA, MBA, BCA, MCA, BE, B.Tech or relevant degree.",
      "Strong communication (Verbal + Written).",
      "Basic or minimal understanding of IT services and solutions is a plus.",
      "Quick learner with a positive attitude and a growth mindset.",
    ],
  },
  {
    title: "Node.js Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We’re hiring a Node.js Developer with 1–4 years of experience to join our dynamic team. You’ll work on a next-gen platform for a crypto-powered gaming ecosystem, helping to build and scale real-time backend systems that support high traffic, complex logic, and blockchain integrations.",
    keyResponsibilities: [
      "Build and maintain scalable Node.js APIs for real-time gaming.",
      "Design and manage databases optimized for high-performance (SQL, Redis).",
      "Ensure secure, low-latency transaction processing.",
      "Integrate Web3 components and blockchain features.",
      "Collaborate with frontend, DevOps, and external stakeholders.",
      "Contribute to game logic, architecture planning, and core functionality.",
      "Write clean, testable, and maintainable code using best practices.",
    ],
    skillsQualifications: [
      "1–4 years of experience in Node.js development.",
      "Strong foundation in SQL, Redis, and API architecture.",
      "Understanding of real-time data and high-load backend systems.",
      "Familiarity with RESTful APIs and secure backend development.",
      "Exposure to AWS or similar cloud infrastructure.",
      "Self-motivated with strong problem-solving and ownership skills.",
    ],
  },
  {
    title: "Ruby on Rails Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We’re looking for a passionate Ruby on Rails Developer with hands-on experience in React.js to join our dynamic engineering team. This full-stack role offers the chance to work on exciting projects, craft scalable and secure applications, and contribute to all stages of development fromconcept to deployment.",
    keyResponsibilities: [
      "Develop and maintain scalable web applications using Ruby on Rails.",
      "Build dynamic and responsive UIs using React.js and modern JavaScript (ES6+).",
      "Design and implement RESTful APIs.",
      "Write clean, maintainable, and testable code using TDD/BDD practices.",
      "Collaborate with designers, PMs, and engineers to define and deliver features.",
      "Troubleshoot performance, scalability, and security issues.",
      "Participate in Agile ceremonies: daily standups, sprint planning, and code reviews.",
      "Deploy and manage apps using CI/CD pipelines.",
    ],
    skillsQualifications: [
      "1–3 years of experience in Ruby on Rails development.",
      "Minimum 1 year of hands-on experience in React.js.",
      "Strong knowledge of MVC architecture, OOP, and RESTful services.",
      "Proficient in JavaScript, HTML5, CSS3, and Bootstrap.",
      "Experience with PostgreSQL, MySQL, or similar relational databases.",
      "Familiar with Git and collaborative development workflows.",
      "Knowledge of RSpec, Minitest, or similar testing tools.",
      "Good grasp of performance optimization and security best practices.",
      "Strong problem-solving and debugging skills.",
      "Effective verbal and written communication.",
    ],
  },
  {
    title: "Data Science Engineer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      " We’re looking for a Data Science Engineer to develop data pipelines, build robust ML models, and deliver end-to-end data solutions. You’ll collaborate with product and engineering teams to extract insights, drive automation, and support scalable decision-making.",
    keyResponsibilities: [
      "Analyze large datasets to identify trends, patterns, and actionable insights.",
      "Build and deploy predictive models using machine learning algorithms.",
      "Work closely with product, engineering, and business teams to translate goals into data solutions.",
      "Visualize data insights through dashboards and reports using tools like Power BI or Tableau.",
      "Ensure data integrity and apply best practices for data validation and cleaning.",
    ],
    skillsQualifications: [
      "2–4 years of experience in Data Science or Analytics roles.",
      "Proficiency in Python (Pandas, NumPy, Scikit-learn), SQL.",
      "Experience with data visualization tools (e.g., Tableau, Power BI, Matplotlib).",
      "Experience with cloud platforms (AWS, GCP, or Azure).",
      "Familiarity with Big Data tools (Spark, Hadoop).",
      "Exposure to NLP, Time Series, or Deep Learning is a plus.",
      "Knowledge of ML algorithms like regression, classification, clustering, etc.",
      "Hands-on with Jupyter, Google Colab, or other notebook environments.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and documentation abilities.",
    ],
  },
  {
    title: "AI/ML Engineer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We’re hiring an AI/ML Engineer to build and deploy smart solutions using machine learning, NLP, and LLMs. You'll turn data into intelligent products that solve real business problems.",
    keyResponsibilities: [
      "Design, develop, and deploy AI/ML solutions, including LLM and NLP models, for various business use cases.",
      "Build, train, and fine-tune machine learning models using structured and unstructured data.",
      "Integrate LLM and ML models into applications, APIs, and platforms.",
      "Implement RAG (Retrieval-Augmented Generation) pipelines to enhance response quality in AI systems.",
      "Containerize models with Docker for consistent deployment across environments.",
      "Establish monitoring, evaluation, and feedback loops to ensure reliable model performance in production.",
      "Collaborate with cross-functional teams to convert business needs into AI/ML solutions.",
    ],
    skillsQualifications: [
      "2–4 years of experience in AI/ML development or related fields.",
      "Strong proficiency in Python and ML libraries such as Scikit-learn, TensorFlow, PyTorch.",
     	"Experience with NLP libraries like Hugging Face Transformers, spaCy, NLTK.",
 	    "Familiarity with LLM-based services and architectures.",
      "Good understanding of data preprocessing, feature engineering, and model evaluation.",
      "Experience with containerization tools like Docker.",
      "Experience with vector databases and retrieval systems like FAISS or Pinecone.",
      "Understanding of LLMOps practices: model monitoring, logging, evaluation pipelines.",
      "Cloud experience (AWS, GCP, Azure) for deploying AI/ML services.",
      "Knowledge of MLflow, LangChain, or related orchestration tools.",
      "Experience with API integration, microservices, or cloud-native architectures.",
      "Strong problem-solving and communication skills.",
    ],
  },
  {
    title: "Full Stack Python Developer",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    jobDescription:
      "We’re looking for a Full Stack Python Developer to build powerful back-end APIs and contribute to modern, responsive front-end interfaces. You’ll play a key role in delivering scalable web solutions from concept to deployment.",
    keyResponsibilities: [
      "Design, develop, and maintain RESTful APIs using Flask or FastAPI frameworks.",
      "Develop intuitive front-end interfaces using HTML, CSS, JavaScript, and modern JS frameworks (React.js preferred).",
      "Work with databases (SQL/NoSQL) to store, retrieve, and process data efficiently.",
      "Ensure seamless integration between front-end and back-end components.",
  	  "Deploy applications using Docker, CI/CD pipelines, and cloud platforms.",
    	"Debug, test, and maintain code for high performance and scalability.",
    	"Collaborate with UI/UX designers and other developers for end-to-end delivery.",
    ],
    skillsQualifications: [
      "1–5 years of hands-on experience in Python web development using Flask or FastAPI.",
    	"Strong knowledge of front-end technologies like HTML5, CSS3, JavaScript (React.js, Vue.js, or similar).",
 	    "Experience with relational and/or NoSQL databases (e.g., PostgreSQL, MySQL, MongoDB).",
      "Experience with Docker, CI/CD, or container-based deployments.",
      "Knowledge of cloud services (AWS, GCP, or Azure).",
    	"Understanding of authentication (OAuth2, JWT) and API security.",
    	"Exposure to testing frameworks like PyTest, Postman, or Swagger.",
    	"Familiarity with agile development processes and tools like JIRA or Trello.",
 	    "Familiarity with RESTful API design principles and integration.",
 	    "Working knowledge of version control tools like Git.",
 	    "Basic understanding of security best practices and performance optimization.",
      "Good communication skills and ability to work in cross-functional teams.",
    ],
  },
];

const Career = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState(null);

  const handleOpen = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedJob(null);
  };

  const [alert, setAlert] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch(
        "https://formsubmit.co/resume@jawaminfotech.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setAlert({ type: "success", message: "Form submitted successfully!" });
        e.target.reset();
      } else {
        throw new Error("Submission failed.");
      }
    } catch {
      setAlert({ type: "error", message: "Failed to submit form." });
    }
  };

  React.useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Careers"
        subTitle={`Join Us to Build\nInnovative Digital Solutions`}
        image={bannerImage}
        currentPage="career"
      />

      {/* Main Section (Find Your Perfect Role and Grow with Us) */}
      <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 14 }, pt: 12, pb: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 1, sm: 12, md: 26, lg: 50 },
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "28px", sm: "34px", md: "36px" },
              fontFamily: theme.typography.fontFamily,
              fontWeight: 900,
              color: theme.palette.text.secondary,
              lineHeight: { xs: "36px", sm: "42px", md: "46px", lg: "48px" },
            }}
          >
            Find Your Perfect Role and Grow with Us
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="4px"
            barWidth="5px"
            mBottom={{ xs: 6, sm: 4.5, md: 8 }}
          />
        </Box>

        {jobData.map((job, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              mb: 3,
              p: 2,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: 2,
            }}
            data-aos="fade-up"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {job.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.custom.paragraph }}
              >
                {job.type} • {job.mode} • {job.location}
              </Typography>
            </Box>
            <Button
              onClick={() => handleOpen(job)}
              sx={{
                alignSelf: isMobile ? "stretch" : "center",
                mt: isMobile ? 1 : 0,
                backgroundColor: theme.palette.text.primary,
                color: theme.palette.custom.white,
                px: 2,
                textTransform: "capitalize",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Apply Now
            </Button>
          </Card>
        ))}

        {/* Dialog / Popup */}
        <Dialog
          open={openDialog}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
          scroll="paper"
        >
          <DialogTitle sx={{ m: 0, p: 2 }}>
            {selectedJob?.title}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 12,
                color: theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: theme.palette.custom.paragraph }}
            >
              <strong>Location:</strong> {selectedJob?.location}
              <br />
              <strong>Type:</strong> {selectedJob?.type}
              <br />
              <strong>Mode:</strong> {selectedJob?.mode}
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 2, color: theme.palette.custom.paragraph }}
              gutterBottom
            >
              <strong style={{ fontSize: "16px" }}>About Us</strong> <br />
              At Jawam Infotech, we deliver innovative and scalable IT solutions
              that empower business growth. As a fast-growing tech company, we
              thrive on excellence, collaboration, and creating meaningful
              digital products that make an impact.
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 2, color: theme.palette.custom.paragraph }}
              gutterBottom
            >
              <strong style={{ fontSize: "16px" }}>Job Description</strong>{" "}
              <br />
              {selectedJob?.jobDescription}
            </Typography>

            {selectedJob?.keyResponsibilities?.length > 0 && (
              <>
                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    color: theme.palette.custom.paragraph,
                  }}
                  gutterBottom
                >
                  Key Responsibilities
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 3, mt: 1, color: theme.palette.custom.paragraph }}
                >
                  {selectedJob.keyResponsibilities.map((item, index) => (
                    <Box component="li" key={index}>
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </>
            )}

            {selectedJob?.skillsQualifications?.length > 0 && (
              <>
                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    color: theme.palette.custom.paragraph,
                  }}
                  gutterBottom
                >
                  Required Skills & Qualifications
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 3, mt: 1, color: theme.palette.custom.paragraph }}
                >
                  {selectedJob.skillsQualifications.map((item, index) => (
                    <Box component="li" key={index}>
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </>
            )}

            {/* Application Form */}
            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: theme.palette.custom.paragraph,
              }}
              gutterBottom
            >
              Fill Details to Apply
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {alert && (
                <Alert severity={alert.type} onClose={() => setAlert(null)}>
                  {alert.message}
                </Alert>
              )}

              <TextField
                type="text"
                name="Job Profile"
                value={selectedJob?.title}
                sx={{
                  display: "none",
                }}
              />

              {/* Name Field */}
              <TextField
                type="text"
                name="name"
                label="Full Name"
                variant="filled"
                required
                sx={{
                  ...textFieldStyle,
                  "& .MuiFormLabel-asterisk": { display: "none" },
                }}
              />

              {/* Email Field */}
              <TextField
                type="email"
                name="email"
                label="Email Id"
                variant="filled"
                required
                sx={{
                  ...textFieldStyle,
                  "& .MuiFormLabel-asterisk": { display: "none" },
                }}
              />

              {/* Mobile Number Field */}
              <TextField
                type="tel"
                name="phone"
                label="Mobile Number"
                variant="filled"
                required
                inputProps={{
                  maxLength: 10,
                }}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                  e.target.value = onlyNums;
                }}
                sx={{
                  ...textFieldStyle,
                  "& .MuiFormLabel-asterisk": { display: "none" },
                }}
              />

              {/* Hidden Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Resume Upload Field */}
              <FormControl variant="filled" required>
                <FormLabel
                  sx={{
                    mb: 1,
                    color: theme.palette.custom.paragraph,
                    fontWeight: 500,
                    fontSize: "1rem",
                    "& .MuiFormLabel-asterisk": {
                      display: "none",
                    },
                  }}
                >
                  Upload Resume
                </FormLabel>

                <Box
                  component="input"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  sx={{
                    backgroundColor: "#EEF9FF",
                    padding: "14px",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                    borderRadius: "4px 4px 0px 0px",
                    fontSize: "16px",
                    fontFamily: theme.typography.fontFamily,
                    cursor: "pointer",
                    "&::file-selector-button": {
                      marginRight: "12px",
                      border: "none",
                      backgroundColor: theme.palette.text.primary,
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: 500,
                    },
                  }}
                />
              </FormControl>

              {/* Submit Button */}
              <Button
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.custom.white,
                  p: 2,
                  borderRadius: "2px",
                }}
              >
                Submit
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default Career;
