const customName = document.getElementById('customname');
const generateBtn = document.querySelector('.generate-btn');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = [
  'a mysterious wizard',
  'a friendly dragon',
  'a clever detective',
  'a brave astronaut',
  'a talented chef',
  'a curious scientist',
  'a magical unicorn',
  'a skilled ninja'
];

const places = [
  'the enchanted forest',
  'a bustling marketplace',
  'the top of a mountain',
  'a cozy coffee shop',
  'the depths of the ocean',
  'a secret laboratory',
  'a floating island',
  'an ancient library'
];

const events = [
  'discovered a hidden treasure map',
  'made friends with a talking animal',
  'solved an impossible puzzle',
  'cooked the most delicious meal ever',
  'invented a time machine',
  'found a portal to another dimension',
  'learned to speak with plants',
  'saved the day with quick thinking'
];

const reactions = [
  'Everyone cheered and celebrated!',
  'The whole town was amazed!',
  'It became the talk of the century!',
  'People came from far and wide to see!',
  'It was featured in newspapers everywhere!',
  'Even the grumpiest person smiled!',
  'It inspired others to go on adventures too!',
  'The story was told for generations!'
];

let storyTemplates = [
  "Once upon a time, :character: was exploring :place: when they :event:. :reaction: :name: watched it all happen and couldn't believe their eyes - it was the most incredible thing they had ever seen!",
  
  "It was a perfectly ordinary day when :character: decided to visit :place:. Little did they know, they would soon :event:. :reaction: :name: was there to witness this amazing moment and knew it would be a day to remember forever!",
  
  "In a world full of surprises, :character: found themselves at :place: on a sunny afternoon. Against all odds, they :event:. :reaction: :name: couldn't help but laugh with joy at this unexpected turn of events!",
  
  "Last Tuesday, :character: was having a regular day at :place: when something extraordinary happened - they :event:. :reaction: :name: was so inspired by this that they decided to write it all down and share the story with everyone!"
];

generateBtn.addEventListener('click', generateStory);

function generateStory() {
  // Get random elements
  const character = randomValueFromArray(characters);
  const place = randomValueFromArray(places);
  const event = randomValueFromArray(events);
  const reaction = randomValueFromArray(reactions);
  const template = randomValueFromArray(storyTemplates);
  
  let newStory = template;
  

  newStory = newStory.replace(':character:', character);
  newStory = newStory.replace(':place:', place);
  newStory = newStory.replace(':event:', event);
  newStory = newStory.replace(':reaction:', reaction);

  const name = customName.value.trim() !== '' ? customName.value.trim() : 'Alex';
  newStory = newStory.replace(':name:', name);
  

  story.textContent = newStory;
  story.classList.add('visible');
}


customName.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    generateStory();
  }
});