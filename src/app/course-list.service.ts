import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class CourseListService {

  constructor() { }

  breakdown: any = {
    totalCredits: 0,
    foundation: 0,
    writing: 0,
    values: 0,
    civ: 0,
    disciplinary: 0,
    humanities: 0,
    sbs: 0,
    nst: 0
  }
  
  spacer = {
    id: 'spacer',
    category: '',
    subcategory: '',
    prefix: 'spacer',
    number: 0,
    code: '',
    name: 'Empty Slot',
    proctored: false,
    prerequisites: [],
    description: '',
    credits: 0
  }
 
  terms = {
    t1Courses : [
      {
        id: 'UNIV1001',
        category: 'foundation',
        subcategory: '',
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
        id: 'CS1101',
        category: 'csMajor',
        subcategory: '',
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
    ],

    t2Courses : [this.spacer],
    t3Courses : [this.spacer],
    t4Courses : [this.spacer],
    t5Courses : [this.spacer],
    t6Courses : [this.spacer],
    t7Courses : [this.spacer],
    t8Courses : [this.spacer],
    t9Courses : [this.spacer],
    t10Courses : [this.spacer],
    t11Courses : [this.spacer],
    t12Courses : [this.spacer],
    t13Courses : [this.spacer],
    t14Courses : [this.spacer],
    t15Courses : [this.spacer],
    t16Courses : [this.spacer],
    t17Courses : [this.spacer],
    t18Courses : [this.spacer],
    t19Courses : [this.spacer],
    t20Courses : [this.spacer]
  }
    Courses = [
      {
        id: 'MATH1201',
        category: 'foundation',
        subcategory: '',
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
        id: 'MATH1280',
        category: 'foundation',
        subcategory: '',
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
        id: 'CS1102',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS1103',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS1104',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS2203',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS2204',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS2205',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS2301',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS2401',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS3303',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS3304',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS3305',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS3306',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS3307',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS3308',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4402',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4403',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4404',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4405',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4406',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4407',
        category: 'csMajor',
        subcategory: '',
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
        id: 'CS4408',
        category: 'csMajor',
        subcategory: '',
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
        id: 'MATH1302',
        category: 'elective',
        subcategory: '',
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
        id: 'MATH1211',
        category: 'elective',
        subcategory: '',
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
      {
        id: 'AHIST1401',
        category: 'humanities',
        subcategory: '',
        prefix: 'AHIST',
        number: 1401,
        code: 'AHIST 1401',
        name: 'Art History',
        proctored: false,
        prerequisites: [],
        description: `This survey course in Western Art History will explore art as a cultural production. This introduction to
        the academic discipline will familiarize students with major movements and styles of art as well as the
        various media and purposes of artistic production. The relationship of the visual arts and the individual
        artist to their society and culture will also be explored.`,
        credits: 3
      },
      {
        id: 'BIOL1121',
        category: 'NST',
        subcategory: '',
        prefix: 'BIOL',
        number: 1121,
        code: 'BIOL 1121',
        name: 'Biology 1 for Health Studies Majors',
        proctored: false,
        prerequisites: [],
        description: `This course introduces main concepts in biology that are common to most living organisms. It covers
        topics in biochemistry, cell biology, and genetics, which illustrate how molecules are organized into
        cells. Cells constitute the basic unit of life, and genes are central to information flow within and
        between cells. In addition, this course makes use of assignments to introduce experimental methods
        and research data repositories. Through these activities, students learn how to approach a complex
        problem and find information relevant to a specific question or method. This course is designed both
        as a prerequisite to the study of biology at the organism or population level and as a general
        introduction to how biological knowledge is being produced.`,
        credits: 3
      },
      {
        id: 'BUS1105',
        category: 'elective',
        subcategory: '',
        prefix: 'BUS',
        number: 1105,
        code: 'BUS 1105',
        name: 'Business Communications',
        proctored: false,
        prerequisites: [],
        description: `The purpose of this course is to build an understanding of effective uses of English in a business
        environment and to develop strong core business communication skills. This course will introduce and
        enhance the varying modes of English communication in the business environment and will also focus
        on when to use these varying modes, depending on the situation. This course will also give students
        the tools to function in a cross-cultural, global business environment and will develop an
        understanding of the best techniques for successful communication in varying business contexts.`,
        credits: 3
      },
      {
        id: 'PSYC1205',
        category: 'SBS',
        subcategory: '',
        prefix: 'PSYC',
        number: 1205,
        code: 'PSYC 1205',
        name: 'Emotional Intelligence',
        proctored: false,
        prerequisites: [],
        description: `This course examines the concepts and practical applications of emotional intelligence. Emotional
        intelligence is the ability to manage one's own internal emotional environment and one's ability to
        participate in relationships with others. Through a highly interactive format, the course will focus on
        how to assess basic skills in emotional intelligence, how to develop strategies to improve and enhance
        basic skill levels, and how to experiment with techniques that facilitate dealing with others of varying
        emotional backgrounds and competency levels.`,
        credits: 3
      },
      {
        id: 'ENGL0101',
        category: 'elective',
        subcategory: '',
        prefix: 'ENGL',
        number: 101,
        code: 'ENGL 0101',
        name: 'English Composition 1',
        proctored: true,
        prerequisites: [],
        description: `UoPeople offers an alternative route for demonstrating English language proficiency for international
        students who are not from an English-speaking country and whose high school language of instruction
        was not English and/or have not demonstrated that they possess the minimum level of required
        competency. They may be provisionally admitted to take this preparatory course that provides a
        review of reading, grammar, and writing prior to taking a qualifying examination. Students must
        successfully pass all aspects of the course, pass the qualifying examination at the end of the course,
        and earn a comprehensive overall grade of 73% or higher to be eligible to be admitted as a non-degree
        student to take regular courses. Students whose final grade is less than a 73% will not pass the course
        but will be eligible to take ENGL 0101 English Composition 1 and the qualifying examination one
        additional time only. Students who do not earn a passing grade on the second try are not eligible for
        regular admission and are dismissed without appeal.`,
        credits: 3
      },
      {
        id: 'ENGL1102',
        category: 'writing',
        subcategory: '',
        prefix: 'ENGL',
        number: 1102,
        code: 'ENGL 1102',
        name: 'English Composition 2',
        proctored: true,
        prerequisites: [],
        description: `This course is designed to foster skills in critical reading and thinking, and in the production and
        evaluation of purposeful academic writing. Students are introduced to literary genres, rhetorical
        patterns in writing, and the use and citation of research sources. They gain practice in clear, effective
        writing, with an emphasis on the academic research paper and its components. By the end of the
        course students will produce a paper of collegiate quality.`,
        credits: 3
      },
      {
        id: 'PHIL1404',
        category: 'values',
        subcategory: '',
        prefix: 'PHIL',
        number: 1404,
        code: 'PHIL 1404',
        name: 'Ethics and Social Responsibility',
        proctored: false,
        prerequisites: [],
        description: `This course explores Western and non-Western approaches to ethical reasoning, and the social
        implications of unethical behavior. Current professional ethics as well as cultural values will be
        analyzed, and students will be asked to reconcile these `,
        credits: 3
      },
      {
        id: 'POLS 1503',
        category: 'SBS',
        subcategory: '',
        prefix: 'POLS',
        number: 1503,
        code: 'POLS 1503',
        name: 'Globalization',
        proctored: false,
        prerequisites: [],
        description: `This course examines changes in national economies over the past half century. Special attention is
        given to the ways that globalization impacts citizenship, ethnic and religious issues, migration, public
        health, poverty, and wealth. The cross-cultural context affords the opportunity to address issues of a
        global nature which may profoundly influence the conditions under which people live and work.`,
        credits: 3
      },
      {
        id: 'HIST1421',
        category: 'civilization',
        subcategory: '',
        prefix: 'HIST',
        number: 1421,
        code: 'HIST 1421',
        name: 'Greek and Roman Civilization',
        proctored: false,
        prerequisites: [],
        description: `The course includes selected readings from Homer, Plato’s Dialogues, and a brief description of the rise
        and fall of the Roman Empire. Students will address the question: In what ways did Greek and Roman
        civilization provide the foundations for the development of western culture?`,
        credits: 3
      },
      {
        id: 'BIOL1301',
        category: 'NST',
        subcategory: '',
        prefix: 'BIOL',
        number: 1301,
        code: 'BIOL 1301',
        name: 'Introduction to Biology',
        proctored: false,
        prerequisites: [],
        description: `This introductory course defines biology and its relationship to other sciences. We examine the
        overarching theories of life from biological research and also explore the fundamental concepts and
        principles of the study of living organisms and their interaction with the environment. We will examine
        how life is organized into hierarchical levels; how living organisms use and produce energy; how life
        grows, develops, and reproduces; how life responds to the environment to maintain internal stability;
        and how life evolves and adapts to the environment.`,
        credits: 3
      },
      {
        id: 'ECON1580',
        category: 'SBS',
        subcategory: '',
        prefix: 'ECON',
        number: 1580,
        code: 'ECON 1580',
        name: 'Introduction to Economics',
        proctored: false,
        prerequisites: [],
        description: `This course provides an introduction to economics as well as an overview of macroeconomics and
        microeconomics. Course topics include the operations of a market economy, money and banking, the
        relations between business organizations and government regulatory agencies, optimal allocation of
        resources, price stability and long-term growth.`,
        credits: 3
      },
      {
        id: 'ENVS1301',
        category: 'NST',
        subcategory: '',
        prefix: 'ENVS',
        number: 1301,
        code: 'ENVS 1301',
        name: 'Introduction to Environmental Sciences',
        proctored: false,
        prerequisites: [],
        description: `This is a multidisciplinary course that will bring together data collected from various scientific fields to
        help students understand the environment, current environmental problems and solutions to these
        problems. The course will cover topics that include biodiversity conservation, agriculture-related
        environmental impacts, environmental effects of human populations and urbanization, the
        consequences of society’s dependence on fossil fuel and solutions using alternative energy sources,
        environmental waste or pollutants affecting land, water and air and lastly environmental economics,
        ethics, policy and sustainable living.`,
        credits: 3
      },
      {
        id: 'PSYC1111',
        category: 'SBS',
        subcategory: '',
        prefix: 'PSYC',
        number: 1111,
        code: 'PSYC 1111',
        name: 'Introduction to Health Psychology',
        proctored: false,
        prerequisites: [],
        description: `Psychology is defined as the scientific study of the human mind and its functions, especially those
        affecting behavior in a given context. This course will draw upon health psychology, public health, and
        community psychology to emphasize how psychology contributes to overall health, as well as the
        cause, progression, and outcomes of physical illness. This course will highlight the many roles that
        psychology plays in health and illness including, the role of health behaviors and behavior change;
        beliefs about illness; symptom perception; help-seeking and communication with health professions;
        stress, pain and chronic conditions such as obesity, coronary heart disease and HIV; the role of gender
        on health; and health outcomes in terms of quality of life and life expectancy.`,
        credits: 3
      },
      {
        id: 'PHIL1402',
        category: 'humanities',
        subcategory: '',
        prefix: 'PHIL',
        number: 1402,
        code: 'PHIL 1402',
        name: 'Introduction to Philosophy',
        proctored: false,
        prerequisites: [],
        description: `This course traces the origins of philosophical thinking from Socrates and Plato in Ancient Greece to
        great thinkers of modern times. The profound questions they posed about reality, ethics, and
        knowledge still challenges us today. This course emphasizes how philosophy is a manner of thinking
        about the most basic problems faced by ordinary people and students are encouraged to examine the
        ideas of the philosophers as they impact their own lives.`,
        credits: 3
      },
      {
        id: 'PSYC1504',
        category: 'SBS',
        subcategory: '',
        prefix: 'PSYC',
        number: 1504,
        code: 'PSYC 1504',
        name: 'Introduction to Psychology',
        proctored: false,
        prerequisites: [],
        description: `This course covers the basic principles of psychology, its common approaches, and its theoretical
        underpinnings. As both a research and applied discipline, Psychology involves the study of mental
        processes and behavior and will facilitate better understanding of the relationship between mind and
        body, and the self and other.`,
        credits: 3
      },
      {
        id: 'SOC1502',
        category: 'SBS',
        subcategory: '',
        prefix: 'SOC',
        number: 1502,
        code: 'SOC 1502',
        name: 'Introduction to Sociology',
        proctored: false,
        prerequisites: [],
        description: `This course studies and compares social groups and institutions and their interrelationships. Special
        topics covered in the course include culture, socialization, deviance, stratification, race, ethnicity, social
        changes, and collective behavior. As an introduction to the scientific discipline of Sociology, students
        will have the opportunity to analyze what we know and what we think we know as citizens, individuals,
        and as novice sociologists.`,
        credits: 3
      },
      {
        id: 'MATH1281',
        category: 'elective',
        subcategory: '',
        prefix: 'MATH',
        number: 1281,
        code: 'MATH 1281',
        name: 'Statistical Inference',
        proctored: false,
        prerequisites: ['MATH 1280'],
        description: `This course covers inferential statistics, estimation, and hypothesis testing. The emphasis in the course
        is on the presentation of statistical methods and on the interpretation of the outcome. The philosophy
        and practice of statistics and not its mathematics is at the center. Needed mathematical computations
        are demonstrated via simulations rather than by abstract proofs. The R system for data analysis is used
        as part of the teaching.`,
        credits: 3
      },
      {
        id: 'ENGL1405',
        category: 'humanities',
        subcategory: '',
        prefix: 'ENGL',
        number: 1405,
        code: 'ENGL 1405',
        name: 'World Literature',
        proctored: false,
        prerequisites: [],
        description: `This course is designed to introduce students to the structural concepts of world literature and to how
        to read critically with an emphasis on analysis and synthesis. The course will focus on both verbal and
        visual literacy via critical reading exercises. By the end of the course, the student will have conducted
        both practical and practice-based research in the area of world literature. Literary selections from a
        number of different cultures are introduced.`,
        credits: 3
      }
    ]

  public getCourses(): Observable<any> {
    return of(this["Courses"])
  }

  public updateBreakdown() {
    for (let e of this.breakdown) e = 0  //? maybe this will reset breakdown?
    // call this on every onDropModel()
    for (let term in this.terms){
      for (let c of term) {
        // the guts.  update this.breakdown here for each course
      }
    }
  }

}
