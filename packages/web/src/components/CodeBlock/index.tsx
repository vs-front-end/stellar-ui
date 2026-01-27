import { useState, useEffect, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  highlightLines?: number[];
  copyable?: boolean;
  maxHeight?: string;
  className?: string;
}

const getTheme = () => {
  const root = document.documentElement;
  if (root.classList.contains('light')) return 'light';
  if (root.classList.contains('ocean')) return 'ocean';
  return 'dark';
};

const customDarkTheme = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'transparent',
    margin: 0,
    padding: 0,
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: 'transparent',
    color: '#f1f5f9',
  },
  keyword: { color: '#6b9fff' },
  string: { color: '#4ade80' },
  'class-name': { color: '#c084fc' },
  tag: { color: '#c084fc' },
  'attr-name': { color: '#fbbf24' },
  punctuation: { color: '#e5e5e5' },
  comment: { color: '#9ca3af', fontStyle: 'italic' },
  function: { color: '#60a5fa' },
  property: { color: '#60a5fa' },
};

const customLightTheme = {
  ...vs,
  'pre[class*="language-"]': {
    ...vs['pre[class*="language-"]'],
    background: 'transparent',
    margin: 0,
    padding: 0,
  },
  'code[class*="language-"]': {
    ...vs['code[class*="language-"]'],
    background: 'transparent',
    color: '#000000',
  },
  keyword: { color: '#0033cc' },
  string: { color: '#008000' },
  'class-name': { color: '#7f32a9' },
  tag: { color: '#7f32a9' },
  'attr-name': { color: '#ac4500' },
  punctuation: { color: '#1a1a1a' },
  comment: { color: '#6b6b6b', fontStyle: 'italic' },
  function: { color: '#0066cc' },
  property: { color: '#0066cc' },
};

const customOceanTheme = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'transparent',
    margin: 0,
    padding: 0,
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: 'transparent',
    color: '#f1f5f9',
  },
  keyword: { color: '#7dd3fc' },
  string: { color: '#4ade80' },
  'class-name': { color: '#c084fc' },
  tag: { color: '#c084fc' },
  'attr-name': { color: '#fbbf24' },
  punctuation: { color: '#e2e8f0' },
  comment: { color: '#94a3b8', fontStyle: 'italic' },
  function: { color: '#60a5fa' },
  property: { color: '#60a5fa' },
};

export function CodeBlock({
  code,
  filename,
  language = 'tsx',
  showLineNumbers = false,
  startingLineNumber = 1,
  highlightLines = [],
  copyable = true,
  maxHeight,
  className = '',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState(getTheme);

  const syntaxTheme = useMemo(() => {
    if (theme === 'light') return customLightTheme;
    if (theme === 'ocean') return customOceanTheme;
    return customDarkTheme;
  }, [theme]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100';
  const mutedColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';

  return (
    <div
      className={`relative rounded-lg border border-border bg-background/80 overflow-hidden ${className}`}
    >
      {(filename || language) && (
        <div
          className={`flex items-center justify-between px-4 py-2 border-b border-border bg-surface`}
        >
          <div className="flex items-center gap-2">
            <svg
              className={`w-4 h-4 ${mutedColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>

            {filename && (
              <span className={`text-sm font-medium ${textColor}`}>
                {filename}
              </span>
            )}

            {language && (
              <span className={`text-sm ${mutedColor} px-2 py-0.5 rounded`}>
                {language}
              </span>
            )}
          </div>

          {copyable && (
            <button
              onClick={handleCopy}
              className={`p-2 rounded hover:bg-opacity-10 hover:bg-gray-500 transition-colors ${mutedColor}`}
              aria-label={
                copied ? 'Copied to clipboard' : 'Copy code to clipboard'
              }
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      )}

      <div
        className="relative overflow-auto"
        style={{ maxHeight: maxHeight || 'none' }}
      >
        <SyntaxHighlighter
          language={language}
          style={syntaxTheme}
          showLineNumbers={showLineNumbers}
          startingLineNumber={startingLineNumber}
          wrapLines={true}
          lineProps={(lineNumber) => {
            const isHighlighted = highlightLines.includes(lineNumber);
            return {
              style: {
                backgroundColor: isHighlighted
                  ? theme === 'light'
                    ? 'rgba(59, 130, 246, 0.1)'
                    : 'rgba(59, 130, 246, 0.15)'
                  : 'transparent',
                display: 'block',
                width: '100%',
              },
            };
          }}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            border: 'none',
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
