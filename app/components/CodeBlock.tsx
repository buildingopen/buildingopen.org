import CopyButton from './CopyButton';
import { codeToHtml } from 'shiki';

type Props = {
  language?: string;
  code?: string;
  children?: React.ReactNode;
};

export default async function CodeBlock({ language, code, children }: Props) {
  let highlighted: string | null = null;

  if (code) {
    const lang = language === '.env' ? 'dotenv' : (language || 'text');
    try {
      highlighted = await codeToHtml(code, {
        lang,
        theme: 'tokyo-night',
      });
    } catch {
      // Fallback to plain rendering if language not supported
    }
  }

  return (
    <div className="my-4">
      <CopyButton>
        <div className="relative">
          {language && (
            <span className="absolute top-3 left-3 text-xs text-zinc-600 select-none z-10">
              {language}
            </span>
          )}
          {highlighted ? (
            <div
              className="shiki-wrapper bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
              <pre className="font-mono text-sm text-zinc-300 whitespace-pre leading-relaxed">
                <code>{children}</code>
              </pre>
            </div>
          )}
        </div>
      </CopyButton>
    </div>
  );
}
