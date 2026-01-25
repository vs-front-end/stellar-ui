export interface Token {
  type: string;
  text: string;
  start?: number;
  end?: number;
}

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const patterns = [
    {
      type: 'keyword',
      regex:
        /\b(import|export|default|function|return|from|const|let|var|if|else|for|while|class|extends|interface|type|async|await|try|catch|finally|throw|new|this|super|static|public|private|protected|readonly|abstract|enum|namespace|declare|as|typeof|keyof|in|of|instanceof|void|null|undefined|true|false|break|continue|switch|case|do|with|yield|get|set)\b/g,
    },
    { type: 'string', regex: /(["'`])((?:\\.|(?!\1).)*?)\1/g },
    { type: 'component', regex: /<\/?[A-Z][a-zA-Z0-9]*\s*\/?>/g },
    { type: 'tag', regex: /<\/?[a-z][a-zA-Z0-9]*\s*\/?>/g },
    { type: 'attribute', regex: /\b[a-z][a-zA-Z0-9]*(?==)/g },
    { type: 'punctuation', regex: /[{}()\[\];,.:]/g },
    { type: 'comment', regex: /\/\/.*|\/\*[\s\S]*?\*\//g },
    { type: 'type', regex: /:\s*([A-Z][a-zA-Z0-9.]*)/g },
  ];

  let lastIndex = 0;
  const matches: Array<{
    type: string;
    start: number;
    end: number;
    text: string;
  }> = [];

  patterns.forEach(({ type, regex }) => {
    const localRegex = new RegExp(regex.source, regex.flags);
    let match;
    while ((match = localRegex.exec(code)) !== null) {
      matches.push({
        type,
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
    }
  });

  matches.sort((a, b) => a.start - b.start);

  const filtered: Array<{
    type: string;
    start: number;
    end: number;
    text: string;
  }> = [];
  matches.forEach((match) => {
    if (
      !filtered.some(
        (f) =>
          (match.start >= f.start && match.start < f.end) ||
          (match.end > f.start && match.end <= f.end)
      )
    ) {
      filtered.push(match);
    }
  });

  filtered.forEach((match) => {
    if (match.start > lastIndex) {
      tokens.push({
        type: 'text',
        text: code.substring(lastIndex, match.start),
      });
    }

    tokens.push(match);
    lastIndex = match.end;
  });

  if (lastIndex < code.length) {
    tokens.push({
      type: 'text',
      text: code.substring(lastIndex),
    });
  }

  return tokens;
}
