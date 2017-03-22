var compliments = [
  "Your smile is contagious.",
  "You look great today.",
  "You're a smart cookie.",
  "I bet you make babies smile.",
  "I like your style.",
  "You have the best laugh.",
  "I appreciate you.",
  "You're strong.",
  "Your perspective is refreshing.",
  "You should be proud of yourself.",
  "You're more helpful than you realize.",
  "On a scale from 1 to 10, you're an 11.",
  "You are making a difference.",
  "How is it that you always look great, even in sweatpants?"
]

module.exports = () => {
  return compliments[Math.floor(Math.random()*compliments.length)]
}
