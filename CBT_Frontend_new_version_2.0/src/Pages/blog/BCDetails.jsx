import cloud from "../../assets/blog/cloud.jpeg"
import dm from "../../assets/blog/dm.jpeg"
import secops_infosec from "../../assets/blog/secops_infosec.jpeg"
import react from "../../assets/blog/react.jpeg"
import testing from "../../assets/blog/testing.jpeg"
import cybersecurity from "../../assets/blog/cybersecurity.jpeg"
import jira from "../../assets/blog/jira.jpeg"
import jiraPdf from "../../assets/blog/blogPDF/Jira.pdf"
import testingPdf from "../../assets/blog/blogPDF/Testing.pdf"
import cyberSecurityPdf from "../../assets/blog/blogPDF/cyberSecurity.pdf"

export const BCDetails = [
    {
        id:1,
        img:dm,
        title:"Optimizing your website for voice search",
        desc:"Optimize your website for voice search by using natural language keywords and focusing on fast, mobile-friendly performance.",
        // pdf: jiraPdf
     
    },
    {
        id:2,
        img:cloud,
        title:"Cloud and Devops",
        desc:"DevOps goes beyond continuous integration and continuous delivery (CI/CD) to enable near-instantaneous deployment of products and services in the cloud.",
        // pdf: cyberSecurityPdf
    },
    {
        id:3,
        img:cybersecurity,
        title:"Cybersecurity",
        desc:"Cybersecurity involves protecting systems, networks, and data from digital attacks, ensuring confidentiality, integrity, and availability.",
        pdf: cyberSecurityPdf
    },
    {
        id:4,
        img:react,
        title:"Uniting AI with React JS for Next-Gen Web Experiences",
        desc:"Unite AI prowess with React JS agility for immersive web experiences; enrich user interactions with personalized recommendations and real-time insights.",
        // pdf: jiraPdf
           },
    {
        id:5,
        img:secops_infosec,
        title:"SecOps vs InfoSec",
        desc:"SecOps integrates security into IT operations for continuous threat response, while InfoSec focuses on protecting information through robust policies and technologies.",
        // pdf: jiraPdf
    },
    {
        id:6,
        img:jira,
        title:"AI support in Jira",
        desc:" AI in Jira revolutionizes project management by enhancing issue tracking, automating workflows, and boosting collaboration.",
        pdf: jiraPdf
    },
    {
        id:7,
        img:testing,
        title:"AI transforming testing and automation",
        desc:"AI revolutionizes testing and automation with tools like Selenium and Testim, ensuring faster and more efficient processes.",
        pdf:testingPdf
    },
    
   
]
// export const BCDetails = [
//     {
//         id:1,
//         img:machineLearning,
//         title:"AI and Machine Learning",
//         desc:"Artificial Intelligence (AI) and Machine Learning (ML) are two closely related fields that have gained significant attention in recent years due to their potential to revolutionize various industries.",
//         briefContent:{
//             content:
//             "Machine learning is a branch of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data, without being explicitly programmed to perform specific tasks. The primary goal of machine learning is to allow computers to automatically learn and improve from experience, without human intervention.",
//             point1_title:"Data:",
//           point1:
//             "Machine learning algorithms require data to learn from. This data can come in various forms, such as structured data (e.g., databases, spreadsheets) or unstructured data (e.g., text, images, videos).",
//             point2_title:"Features:",
//             point2:
//             "Features are the variables or attributes present in the data that are used to make predictions or decisions. The selection and engineering of relevant features play a crucial role in the performance of machine learning models.",
//             point3_title:"Models:",
//           point3:
//             "Machine learning models are mathematical representations of the relationships between input features and output predictions. These models can be trained on labeled data (supervised learning) to make predictions or uncover patterns, or they can learn from unlabeled data (unsupervised learning) to discover hidden structures or relationships.",
//             point4_title:"Training:",
//           point4:
//             "Training is the process of fitting a machine learning model to data by adjusting its parameters to minimize the difference between predicted outputs and actual outcomes. During training, the model learns from the data to make accurate predictions on new, unseen data.",
//             point5_title:"Evaluation: ",
//           point5:
//             "After training, machine learning models are evaluated using validation data to assess their performance and generalization ability. Metrics such as accuracy, precision, recall, and F1-score are commonly used to evaluate classification models, while metrics like mean squared error (MSE) and R-squared are used for regression models.",
//             point6_title:"Supervised Learning:",
//           point6:
//             "In supervised learning, the model is trained on labeled data, where each example is associated with a target output. The goal is to learn a mapping from input features to output labels, allowing the model to make predictions on new, unseen data.",
//             point7_title:"Unsupervised Learning:",
//           point7:
//             " In unsupervised learning, the model is trained on unlabeled data, and its objective is to find hidden patterns or structures within the data. Clustering, dimensionality reduction, and anomaly detection are common tasks in unsupervised learning.",
//             point8_title:"Deep Learning:",
//           point8:
//             "Deep learning is a subfield of machine learning that focuses on neural networks with multiple layers (deep neural networks). Deep learning models are capable of automatically learning hierarchical representations of data, leading to state-of-the-art performance in tasks such as image recognition, natural language processing, and speech recognition.",
           
//         },
//     },
//     {
//         id:2,
//         img:cloud,
//         title:"Cloud",
//         desc:"Cloud technology refers to the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.",
//     },
//     {
//         id:3,
//         img:web_mobile,
//         title:"How to choose platform for web / Mobile",
//         desc:"Consider utilizing React.js with Node.js for scalable and interactive web development, while Flutter provides a high-performance, cross-platform solution for mobile apps with a unified codebase.",
//         briefContent:{
//             content:
//             "Choosing the right platform for web and mobile development involves considering various factors such as project requirements, target audience, budget, timeline, and development resources. ",
//            topic1:"Web Development:",
//             point1_title:"Frontend Technologies:",
//           point1:
//             "For web development, you have various frontend technologies to choose from, such as HTML, CSS, and JavaScript. Consider frameworks/libraries like React.js, Angular, Vue.js, or Svelte based on your project requirements, scalability, and developer familiarity.",
//             point2_title:"Backend Technologies:",
//             point2:
//             "Choose from a range of backend technologies like Node.js, Python (Django, Flask), Ruby on Rails, PHP (Laravel), or Java (Spring Boot). Factors to consider include scalability, performance, security, and integration capabilities with frontend technologies.",
//             point3_title:"Content Management Systems (CMS):",
//           point3:
//             "If you need a content-driven website, consider using CMS platforms like WordPress, Drupal, or Joomla. These platforms offer pre-built templates, plugins, and administrative interfaces for managing content effectively.",
//             point4_title:"Hosting and Deployment:",
//           point4:
//             "Select a hosting provider and deployment strategy based on scalability, performance, security, and budget. Options include shared hosting, virtual private servers (VPS), cloud hosting (e.g., AWS, Google Cloud, Azure), and serverless architectures.",
//             topic2:"Mobile Development:",
//             point5_title:"Native Mobile Apps:",
//           point5:
//             "Develop native apps specifically for a single platform (iOS or Android) using platform-specific languages and development environments (Swift or Objective-C for iOS, Java or Kotlin for Android). Native apps offer high performance, native user experience, and access to platform-specific features.",
//             point6_title:"Cross-Platform Frameworks: ",
//           point6:
//             "Utilize cross-platform frameworks like React Native, Flutter, Xamarin, or Ionic to build mobile apps with a single codebase that can run on multiple platforms. These frameworks offer faster development cycles, code reusability, and access to native features through abstraction layers.",
//             point7_title:"Progressive Web Apps (PWAs):",
//           point7:
//             " PWAs are web applications that offer app-like experiences across devices and platforms. Developed using web technologies (HTML, CSS, JavaScript), PWAs offer offline capabilities, push notifications, and can be installed on users' home screens.",
//             point8_title:"Hybrid Mobile Apps:",
//           point8:
//             "Hybrid apps are built using web technologies (HTML, CSS, JavaScript) and wrapped in a native container. Platforms like Apache Cordova and PhoneGap facilitate hybrid app development, offering access to device features through plugins.",
           
//         },
//     },
//     {
//         id:4,
//         img:chatgpt,
//         title:"Building resume with ChatGPT",
//         desc:"Building a resume with ChatGPT involves leveraging the capabilities of the language model to generate content, provide suggestions, and refine your resume draft.",
//     },
//     {
//         id:5,
//         img:dm,
//         title:"AI generative DM",
//         desc:"AI generative digital marketing refers to the application of artificial intelligence (AI) technologies, particularly generative models, in various aspects of digital marketing strategy, content creation, optimization, and automation.",
//     },
//     {
//         id:6,
//         img:content,
//         title:"AI generative Content Publish",
//         desc:"AI generative content publishing refers to the use of artificial intelligence (AI) technologies, particularly generative models, to create and distribute content across various digital platforms automatically.",
//     },
   
// ]
