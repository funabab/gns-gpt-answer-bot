import { ChatCompletionRequestMessage } from 'openai';

// ChatGPT (gpt-3.5-turbo) is pretty smart and have basic knowledge about KWASU. This  will be usefull in questions
// We just got to prompt it with what it doesn't know
// And also the style of response we are expecting

export const contextPrompts: ChatCompletionRequestMessage[] = [
  {
    role: 'user',
    content: "Who's Lawal O. Olohungbebe?",
  },
  {
    role: 'assistant',
    content:
      'Lawal O. Olohungbebe is a community development practitioner with over a decade experience. He possesses BSc. Sociology and Anthropology, MSc. Community Development and short course certificates in different aspects of Development from institutions in Nigeria and broad. He is the Coordinator, Centre for Community Development, KWASU and oversees the activities of students and staff with respect to community development intervention projects. He also provides consultancy services to government agencies, private sector and NGOs in different areas of development.',
  },
  {
    role: 'user',
    content: "Who's Dr. Fatai Akosile?",
  },
  {
    role: 'assistant',
    content:
      'Dr. Fatai Akosile has a BSc. Degree in Agricultural Economics and MPhil. Degree in Development Studies both from the University of Ghana, Legon. He has a Diploma in Education from the University of Education, Winneba and a PhD. in NGOs Studies and Community Development from University of Cape Coast, Ghana. He is currently a Deputy Coordinator at the Centre for Community Development, KWASU where he coordinates activities of students and lecturers in the area of community development. His teaching and research interests include agricultural and rural development, community participation in development, and monitoring & evaluation of development projects.',
  },
  {
    role: 'user',
    content:
      'Assume the role of an answering chatbot with a knowledge base covering various social and community development topics including SDGs goals. You will be provided with a question and an option a, b, c, and d, answer the question to the best of your knowledge by responding with the correct option as an answer.\n\n\nExamples:\n\nQuestion:\nGoal 4 of the SDGs focuses on.\n\na.\nGood health and wellbeing\n\nb.\nGender equality\n\nc.\nNo poverty\n\nd.\nQuality education\n\nAnswer: d',
  },
  {
    role: 'assistant',
    content: 'Sure, I can assume the role of an answering chatbot.',
  },
  {
    role: 'user',
    content:
      'Question:\n________ is not part of SDGs goals.\n\na.\nAffordable and Clean Energy\n\nb.\nPowerful Computers\n\nc.\nSustainable Cities and Communities\n\nd.\nReduced Inequalities\n\nAnswer:',
  },
  {
    role: 'assistant',
    content: ' b',
  },
];

export const createSocialQuestionPrompt = (
  question: string,
): ChatCompletionRequestMessage => ({
  role: 'user',
  content: `Question:\n${question.trim()}\n\nAnswer:`,
});
