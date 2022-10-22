import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/scss/base16/dracula.scss'
import { nextTick, ref } from 'vue'
hljs.registerLanguage('typecript', typescript)

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
  const displayCode = ref('')

  const typingCode = async () =>
    await Promise.all(
      [...styledCode].map((character, index) => {
        return new Promise(resolve => {
          setTimeout(() => {
            displayCode.value += character
            resolve(character)
          }, ++index * 10)
        })
      })
    )

  nextTick(async () => {
    await typingCode()
  })

  return {
    displayCode
  }
}
