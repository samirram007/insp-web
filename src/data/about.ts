export type TeamMember = {
  name: string
  role: string
  /** null = original photo was not captured; initials avatar is rendered */
  photo: string | null
  bio: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Shri U.K. Verma',
    role: 'Ex. Executive Director (NLDC)',
    photo: null,
    bio: 'Having worked in various capacities at NHPC Ltd., POWERGRID, WRLDC, ERLDC, and NLDC, POSOCO, he has over 37 years of a wide ranging experience in several areas, including grid management, operation and maintenance of hydro power station, substations, installation of EMS and SCADA, and construction of distribution network in hilly terrain in Nepal. A member of IEEE, he also has more than 25 papers published in National Conferences.',
  },
  {
    name: 'Shri V.K. Shrivastava',
    role: 'Ex. Executive Director (WRLDC)',
    photo: null,
    bio: 'Instrumental in the implementation of the Golden Share Concept, the present independent Director in Madhya Pradesh Transmission Corporation has several record contributions to the formulation and implementation of Reserve shut down procedure, Renewable integration, and grid management in surplus situation. Having ensured 100% absorption of Renewable in the entire western region and NIL curtailment from 2017-2020, he also contributed in finalising the basic policy papers of POSOCO and MP Transco.',
  },
  {
    name: 'Shri A. Gartia',
    role: 'Ex. Executive Director (SRLDC)',
    photo: null,
    bio: 'With over 30 years of association with RLDC, POSOCO, he is part of the team that directly implemented various new technologies for the first time in the power sector of India such as DSM, ULDC, WAMS-PMU technology, web based energy scheduling, advanced protection monitoring systems, and many more. He is witness to the development of the power market and identifies all optimization opportunities through proper portfolio management.',
  },
  {
    name: 'Shri Nilratan Paul',
    role: 'Former General Manager, NERLDC POSOCO',
    photo: null,
    bio: 'Having more than 37+ years of experience in different fields. Also worked in ASEB, NTPC, POWERGRID in different capacities. Has long experience in Grid Management including Power System studies, Scheduling, Protection etc. In addition to above he has experience in Power Market operation; Contracts & Materials, O&M and Construction of EHV Substations and Transmissions Lines etc.',
  },
  {
    name: 'Shri Goutam Chakraborty',
    role: 'Former Chief General Manager, NLDC POSOCO',
    photo: null,
    bio: 'Having more than 35+ years of experience in NTPC, POWERGRID, NERLDC, ERLDC & NLDC. In POSOCO, he drives ideas for regulatory issues related to open access administration, Metering, Settlement and connectivity. He is instrumental in successfully introduction of AMR system in Eastern Region, Ancillary Service, various Market Operation activities such as SCED, power transfer to cross border countries (Bhutan, Nepal, Myanmar, Bangladesh etc.) in NLDC. He is a member of IEEE having more than 20 papers in National and International journals.',
  },
  // {
  //   name: 'Shri Shubhasis Mishra',
  //   role: 'Ph.D — Indian Institute of Management Calcutta',
  //   photo: null,
  //   bio: 'Winner of the prestigious POMS Emerging Economy Doctoral Scholar Award-2019 from Asia. B.Tech in Electrical Engineering from NIT Durgapur. PhD dissertation: A year-ahead hourly forecast of electricity demand considering multiple levels of seasonality. Assistant Professor of Data Science and Operations Management at Rastriya Vidyapeeth University, Bangalore.',
  // },
]

export const VMV = [
  {
    title: 'Our Vision',
    image: null,
    body: 'To help procure continuous reliable power, optimise the cost of power purchase, operate more sustainably, drive down energy operating costs, improve resilience, facilitate participation in energy markets, and exceed commitments with the most persuasive AI-powered products and software solutions.',
  },
  {
    title: 'Our Mission',
    image: null,
    body: 'To provide knowledge and expertise in the new power structure, address the various operational challenges while driving profitability, and accelerate the adoption of renewables with the aim of contributing towards the fulfilment of the renewable energy capacity target of 175 GW by 2022 in India.',
  },
  {
    title: 'Core Values',
    image: null,
    body: '“Team Practical Views” believes that they are indebted to the community for the acquirement of their experiences and domain knowledge. Hence, the team wishes to lend pro bono cerebral support to the power sector and give back to the Society with selfless commitment.',
  },
]

export const WHY_ENGAGE = [
  'Optimise the cost of power purchase for the state through smart scheduling strategies and practical solutions.',
  'Adopt latest technical requirements and practices in compliance with the CEA for all load dispatch centres and renewable entities.',
  'Overcome curtailments and prevailing issues for renewable generating utilities with a focus on hybrid technology.',
  'Derive maximum benefits out of optimum utilisation of hydro resources for state govts, Discoms, SLDCs, central and private utilities.',
  'Resolve issues and control precarious situations that lead thermal units to go on RSD for small states and UTs.',
  'Tackle non-tariff barriers for all commercial power distribution entities with 1 MW load and above.',
  'Build capacity for emerging SLDCs, Transco’s, Gencos, and Discoms in the matters related to regulatory issues.',
  'Develop and implement novel scheduling software for interested and forthcoming SLDCs using latest framework and language.',
]

export const TRANSFORMATION_PARAGRAPHS = [
  'Deeply impacted by factors like generation decentralization, deregulation, the growing need for decarbonization, and other significant challenges such as safety and reliability of the processes, changing demand and regulatory policies, fluctuating commodity prices, the increasing digitalization of the power grid, implementation of new technologies, and the need to cut costs, the power sector is rapidly shifting from a conservative past to a new system where innovation is key.',
  'The right software technology combined with the valuable advice from industry experts who understand and identify the real issues and leakage areas can play a pivotal role in boosting energy efficiency and asset performance, maintenance, optimization and management of the balance between demand and supply, profitable trading, reconstruction of business models as well as modification of consumer experience for State governments, Discoms, holding companies of Discoms, SLDCs, and private distribution companies.',
  'Understanding the transition trends and identifying the true potential of machine learning, big data, advanced analytics, and other AI techniques in core functions of the energy sector, Inspirigence Works has been dedicatedly developing cutting-edge energy services and artificial intelligence based products under the complete guidance of “Team Practical Views” to make the design of the future energy system of the country more efficient, safe, secure, and cost-effective that delivers greater potential and operational benefits than ever realized.',
]

export const SERVICES_PROVIDED_LIST = [ 'Team Practical Views', 'Forecasting & Predictions']

export const ABOUT_INTRO = {
  eyebrow: 'WHO WE ARE',
  title: 'A Fusion of Intelligence, Experience, and Inspiration.',
  body: '“Team Practical Views” with more than 100 years of combined practical experiences in the power sector has teamed up with young professional experts in statistical science and software development to form Inspirigence Works, an energy management software company, offering a wide range of practical tips, AI-enabled power utility products and associated software solutions to help achieve tangible and demonstrable results for State governments, Discoms, holding companies of Discoms, SLDCs, and private distribution companies at the national and regional perspectives. The start-up has a sole objective to turn around the financial status of Discoms through their SLDCs, and also aims to benefit entities in Generation and Transmission along with a more focussed approach on the improvement of the renewable sector.',
}

export const WHY_ENGAGE_INTRO =
  'Coupling the rich experience of the trio of “Team Practical Views” with the zeal of enthusiasm and ambition of talented, fearless youth to create breakthrough techniques, Inspirigence Works is confident to redefine the difference between success and failure. Our innovative and tested solutions can help:'

export const SERVICES_PROVIDED_INTRO =
  'With “Team Practical Views”, the company is committed to providing tailored long-term strategic planning, practical advice, and AI-powered solutions to ensure outsized benefits and cost efficiencies for State governments, Discoms, holding companies of Discoms, SLDCs, and private distribution companies through the following services.'
