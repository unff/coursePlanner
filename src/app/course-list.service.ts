import { Injectable } from '@angular/core';

@Injectable()
export class CourseListService {

  constructor() { }
  spacer = {
    category: '',
    prefix: 'spacer',
    number: 0,
    code: '',
    name: '',
    proctored: false,
    prerequisites: [],
    description: '',
    credits: 0
  }
  t1Courses = [
    {
      category: 'foundation',
      prefix: 'UNIV',
      number: 1101,
      code: 'UNIV 1001',
      name: 'Online Education Strategies',
      proctored: false,
      prerequisites: [],
      description: `This course is required for all students and is a preparation for a successful journey into the University’s
      online environment. It will introduce students to the University of the People library, the resources
      available to them, to the academic methods, and to the policies and expectations for student
      performance. Further, it will provide an overview of strategies for student success including time and
      stress management, effective study skills, and personal ownership of the learning process.`,
      credits: 3
    },
    {
      category: 'foundation',
      prefix: 'CS',
      number: 1101,
      code: 'CS 1101',
      name: 'Programming Fundamentals',
      proctored: false,
      prerequisites: [],
      description: `This course covers the basics of computer programming and provides a foundation for further learning
      in this area. No previous computer programming knowledge is required to finish this course. The
      course uses the Python programming language which is very simple and straightforward. The course
      also covers abstract concepts which can be applied to almost any programming language, and students
      are encouraged to pay attention to these, since the way of thinking like a programmer is the most
      valuable lesson they will learn.`,
      credits: 3
    }
  ]
  t2Courses = [
    
  ]
  courses = [
    {
      category: 'foundation',
      prefix: 'MATH',
      number: 1201,
      code: 'MATH 1201',
      name: 'College Algebra',
      proctored: true,
      prerequisites: [],
      description: `This course provides a solid grounding in algebra, trigonometry, and analytic geometry in preparation
      for further mathematical studies. The course includes an extensive study of linear, quadratic, and
      rational functions. It also contains an introduction to exponential and logarithmic functions and circles.
      Finally, the topic of systems of linear equations is covered.`,
      credits: 3
    },
    {
      category: 'foundation',
      prefix: 'MATH',
      number: 1280,
      code: 'MATH 1280',
      name: 'Introduction to Statistics',
      proctored: true,
      prerequisites: [],
      description: `This course presents students with basic concepts in statistics and probability and encourages
      statistical thinking. Topics covered include descriptive statistics, probability, discrete and continuous
      random variables, the sampling distribution and the Central Limit Theorem. The R statistical
      programming environment is used for computation, graphical presentation, and simulations. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 1102,
      code: 'CS 1102',
      name: 'Programming 1',
      proctored: false,
      prerequisites: ['CS 1101'],
      description: `This introductory course teaches the fundamental concepts of programming languages by use of the
      popular Java language. The topics cover fundamental principles of programming, including data types,
      program control and decisions, loops, string manipulations, procedures, arrays, software testing, and
      debugging. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 1103,
      code: 'CS 1103',
      name: 'Programming 2',
      proctored: false,
      prerequisites: ['CS 1102'],
      description: `This course builds on the Introduction to Programming 1 course and teaches a more highly developed
      Java programming language with features beyond the basic concepts covered in the first programming
      course. A large part of the course will be devoted to more advanced building blocks such as recursion,
      linked data structures, and Java's Collection Framework. In addition to this, students learn about
      designing and coding complex, robust, and efficient programs, and are introduced to a professional
      programming tool: the Eclipse Integrated Development Environment.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 1104,
      code: 'CS 1104',
      name: 'Computer Systems',
      proctored: false,
      prerequisites: [],
      description: `This course is an introduction to computer systems. In this course we will begin by exploring the
      internal design and functionality of the most basic computer components. From there, we will use an
      online hardware simulator to actually “build” a computer and develop an assembler from the ground
      using concepts we will learn in the class. In the process, we will cover the ideas and techniques used in
      the design of modern computer hardware and discuss major trade-offs involved in system design as
      well as future trends in computer architecture and how those trends might affect tomorrow’s
      computers. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 2203,
      code: 'CS 2203',
      name: 'Databases 1',
      proctored: false,
      prerequisites: ['CS 1102'],
      description: `This course introduces the fundamental concepts necessary for designing, using and implementing
      database systems. We stress the fundamentals of database modeling and design, relational theory,
      and the Structured Query Language. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 2204,
      code: 'CS 2204',
      name: 'Communications and Networking',
      proctored: false,
      prerequisites: ['CS 1104'],
      description: `This course will introduce the basic concepts of communication networks, including the OSI model and
      different types of communication protocols, including the Internet Protocol (TCP/IP protocol). The
      course will also cover the key concepts and structures of the Internet. Throughout the course, we will
      mainly be focusing on the two most prevalent reference models of network definition, OSI and TCP/IP. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 2205,
      code: 'CS 2205',
      name: 'Web Programming 1',
      proctored: true,
      prerequisites: ['CS 1103'],
      description: `This course introduces students to fundamental concepts and issues surrounding software
      development for programs that operate on the web and the internet such as static and dynamic
      content, dynamically served content, web development processes, and security.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 2301,
      code: 'CS 2301',
      name: 'Operating Systems 1',
      proctored: true,
      prerequisites: ['CS 1103'],
      description: `This course provides an applied introduction to commercial operating systems. It is intended for
      intermediate students who have basic programming skills. Key concepts of computer systems and
      operating systems are introduced, as well as the communications and linkages associated with
      computer systems. Operating systems that are introduced include Microsoft Windows and UNIX/Linux.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 2401,
      code: 'CS 2401',
      name: 'Software Engineering 1',
      proctored: false,
      prerequisites: ['CS 1103'],
      description: `This course focuses on the engineering process requirements, including identification of stakeholders,
      requirements elicitation techniques such as interviews and prototyping, analysis fundamentals,
      requirements specification, and validation. Course topics will include the use of models (Stateoriented,
      Function-oriented, and Object-oriented), documentation for Software Requirements (Informal, semiformal,
      and formal representations), structural, informational, and behavioral requirements; nonfunctional
      requirements, and the use of requirements repositories to manage and track requirements
      through the life cycle. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 3303,
      code: 'CS 3303',
      name: 'Data Structures',
      proctored: false,
      prerequisites: ['CS 1103'],
      description: `This course introduces the fundamental concepts of data structures and the algorithms that proceed
      from them. Although this course has a greater focus on theory than application, the assignments,
      examples, and cases introduced throughout the course help to bridge the gap between theoretical
      concepts and real world problem solving. We will be using a software tool that will enhance our
      understanding of the operation and function of the data structures and algorithms explored
      throughout the course by visually animating examples of data structures and algorithms so that we can
      understand their operation. Key topics within this course will include recursion, fundamental data
      structures (including stacks, queues, linked lists, hash tables, tress, and graphs), and the basics of
      algorithmic analysis.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 3304,
      code: 'CS 3304',
      name: 'Analysis of Algorithms',
      proctored: false,
      prerequisites: ['CS 3303'],
      description: `This course builds on knowledge of elementary algorithm analysis gained in Data Structures to further
      analyze the efficiency of algorithms for sorting, searching, and selection. The course will also introduce
      algorithm design techniques.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 3305,
      code: 'CS 3305',
      name: 'Web Programming 2',
      proctored: true,
      prerequisites: ['CS 2205'],
      description: `This course builds on the concepts and issues discussed in Web Programming 1 surrounding software
      development for programs that operate on the web and the Internet. Existing and emerging web
      development topics to be covered include web applications, web services, enterprise web
      development, markup languages, and server-side programming.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 3306,
      code: 'CS 3306',
      name: 'Databases 2',
      proctored: true,
      prerequisites: ['CS 2203'],
      description: `This course will cover server database management, configuration and administration, security
      mechanisms, backup and recovery, transact SQL Programming, and an introduction to database
      webapplication development. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 3307,
      code: 'CS 3307',
      name: 'Operating Systems 2',
      proctored: false,
      prerequisites: ['CS 2301'],
      description: `This course builds on principles learned in Operating Systems 1 to approach complex computer
      operating system topics such as networks, parallel computing, remote procedure call, concurrency,
      transactions, shared memory, message passing, scale, naming, and security. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 3308,
      code: 'CS 3308',
      name: 'Information Retrieval',
      proctored: true,
      prerequisites: ['CS 3303'],
      description: `This course covers the storage and retrieval of unstructured digital information. Topics include
      automatic index construction, retrieval models, textual representations, efficiency issues, search
      engines, text classification, and multilingual retrieval. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4402,
      code: 'CS 4402',
      name: 'Comparative Programming Languages',
      proctored: false,
      prerequisites: ['CS 1103'],
      description: `This course focuses on the organization of programming languages, emphasizing language design
      concepts and semantics. This course will explore the study of language features and major
      programming paradigms, with a special emphasis on functional programming. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4403,
      code: 'CS 4403',
      name: 'Software Engineering 2',
      proctored: false,
      prerequisites: ['CS 2401'],
      description: `This course addresses more advanced topics in software engineering. Topics include the study of
      project planning, techniques for data-oriented design, object-oriented design, testing and quality
      assurance, and computer-aided software engineering.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4404,
      code: 'CS 4404',
      name: 'Advanced Networking and Data Security',
      proctored: false,
      prerequisites: ['CS 2204'],
      description: `This course explores the basic components and design principles of advanced broadband networks
      (wireline and wireless), exploring how they enable essential services such as mobility, and secure data
      storage, processing and transmission. This course will also introduce the student to emerging issues
      facing organizations considering implementing cloud computing services and mobility to enabling
      worker productivity. Students will also be exposed to the basic pillars of network security (IA) and
      protecting individual privacy.`,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4405,
      code: 'CS 4405',
      name: 'Mobile Applications',
      proctored: false,
      prerequisites: ['CS 2205'],
      description: `The course explores concepts and issues surrounding information system applications to real-time
      operating systems and wireless networking systems. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4406,
      code: 'CS 4406',
      name: 'Computer Graphics',
      proctored: true,
      prerequisites: ['CS 3304'],
      description: `This course explores graphics applications and systems. Topics to be covered include the basic
      structure of interactive systems, implementation of packages, distributed architectures for graphics,
      and the representation of surfaces. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4407,
      code: 'CS 4407',
      name: 'Data Mining and Machine Learning',
      proctored: true,
      prerequisites: ['CS 3304'],
      description: `This course presents an introduction to current concepts in machine learning, knowledge discovery,
      and data mining. Approaches to the analysis of learning algorithm performance will also be discussed
      and applied. `,
      credits: 3
    },
    {
      category: 'csMajor',
      prefix: 'CS',
      number: 4408,
      code: 'CS 4408',
      name: 'Artificial Intelligence',
      proctored: true,
      prerequisites: ['CS 4407'],
      description: `This course will cover current concepts and techniques in artificial intelligence, including “reasoning”,
      problem solving, and search optimization. `,
      credits: 3
    },
    {
      category: 'elective',
      prefix: 'MATH',
      number: 1302,
      code: 'MATH 1302',
      name: 'Discrete Mathematics',
      proctored: false,
      prerequisites: [],
      description: `This course is primarily intended for students majoring in Computer Science. The emphasis will be on
      the development of technical discrete mathematics skills, rather than rigorous proof. Topics will 
      include number systems, sets, logic, induction, elementary counting techniques, relations, functions,
      matrices, and Boolean algebra. `,
      credits: 3
    },
    {
      category: 'elective',
      prefix: 'MATH',
      number: 1211,
      code: 'MATH 1211',
      name: 'Calculus',
      proctored: false,
      prerequisites: ['MATH 1201'],
      description: `This course provides an interdisciplinary introduction to the core concepts of differential calculus,
      covering a wide range of topics. Content includes both applications and theory of differential calculus
      leading to an introduction of The Fundamental Theorem of Calculus. Learners will continue to refine
      independent study skills, problem solving, logically correct and mathematically precise writing and
      thinking, and their ability to use geometric, symbolic and analytic formats in presenting solutions to
      both abstract and real world applications. `,
      credits: 3
    },
  ]

}
