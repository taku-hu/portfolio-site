import hljs from 'highlight.js'
import 'highlight.js/scss/base16/dracula.scss'
import { ref } from 'vue'

const styledCode = hljs.highlightAuto(`// Thank you for visiting.
// This is my portfolio site.

console.log('Hello Hackers!');

class Profile {
  private age?: number;
  constructor (readonly name: string, readonly gender: 'male' | 'female') {}

  getAge (this: Profile, birthYear: number) {
    const now = new Date();
    const thisYear = now.getFullYear();

    this.age = thisYear - birthYear;

    console.log(\`I am \${this.age} years old.\`)
  }
}

const me = new Profile(
  'Takeuchi Takuto',
  'male'
);

me.getAge(1993);

console.log('Nice to meet you!');
    `).value

export const useTypingCode = () => {
  const typedCode = ref('')

  const startTyping = async () =>
    await Promise.all(
      [...styledCode].map((character, index) => {
        return new Promise(resolve => {
          setTimeout(() => {
            typedCode.value += character
            resolve(character)
          }, ++index * 10)
        })
      })
    )

  return {
    typedCode,
    startTyping
  }
}
