import * as React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Heading from '@tiptap/extension-heading';
import { mergeAttributes } from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { cn } from '@stellar-ui/shared';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Toggle } from '../Toggle';

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Trash2,
  Minus,
  Code,
} from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../Dialog';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select';

import { Separator } from '../Separator';

interface TextEditorProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> {
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (html: string) => void;
  editable?: boolean;
  onUploadImage?: (file: File) => Promise<string>;
}

export interface TextEditorRef {
  getHTML: () => string;
  getText: () => string;
  setContent: (content: string) => void;
  clear: () => void;
}

export const TextEditor = React.forwardRef<TextEditorRef, TextEditorProps>(
  (
    {
      label,
      error,
      placeholder = 'Type here...',
      value,
      onChange,
      editable = true,
      onUploadImage,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const onUploadImageRef = React.useRef(onUploadImage);
    onUploadImageRef.current = onUploadImage;

    const editorInstanceRef = React.useRef<ReturnType<typeof useEditor>>(null);

    const editorId =
      id || `text-editor-${Math.random().toString(36).substr(2, 9)}`;
    const [linkModalOpen, setLinkModalOpen] = React.useState(false);
    const [linkUrl, setLinkUrl] = React.useState('');
    const [linkText, setLinkText] = React.useState('');
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          heading: false,
          link: false,
          underline: false,
        }),
        Heading.extend({
          renderHTML({ node, HTMLAttributes }) {
            const level = node.attrs.level as 1 | 2 | 3 | 4;
            const classes: Record<number, string> = {
              1: 'text-3xl font-bold mb-2 mt-4',
              2: 'text-2xl font-bold mb-2 mt-3',
              3: 'text-xl font-semibold mb-2 mt-2',
              4: 'text-lg font-semibold mb-2 mt-2',
            };
            return [
              `h${level}`,
              mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                class: classes[level] ?? '',
              }),
              0,
            ];
          },
        }).configure({ levels: [1, 2, 3, 4] }),
        TextAlign.configure({
          types: ['heading', 'paragraph', 'image'],
        }),
        Underline,
        Image.extend({
          renderHTML({ node, HTMLAttributes }) {
            const baseClass = 'max-w-full h-auto object-contain my-2';
            const align = node.attrs.textAlign;
            const imgAttrs = mergeAttributes(
              { class: baseClass },
              this.options.HTMLAttributes,
              HTMLAttributes
            );
            if (align) {
              imgAttrs['data-text-align'] = align;
            }
            return ['img', imgAttrs];
          },
        }).configure({
          HTMLAttributes: {
            class: 'max-w-full h-auto object-contain my-2',
          },
        }),
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            class: 'text-primary underline',
          },
        }),
        Placeholder.configure({
          placeholder,
        }),
      ],
      content: value || '',
      editable,
      onUpdate: ({ editor }) => {
        onChange?.(editor.getHTML());
        forceUpdate();
      },
      onSelectionUpdate: () => {
        forceUpdate();
      },
      onTransaction: ({ editor }) => {
        if (editor.view.hasFocus()) {
          forceUpdate();
        }
      },
      editorProps: {
        attributes: {
          class: cn(
            'focus:outline-none min-h-[200px] max-h-[400px] overflow-y-auto px-4 py-3 text-foreground',
            '[&_p]:mb-2',
            '[&_hr]:my-4 [&_hr]:border-border',
            '[&_strong]:font-bold',
            '[&_em]:italic',
            '[&_u]:underline',
            '[&_code]:bg-primary-soft [&_code]:text-primary-text [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono',
            '[&_pre]:bg-primary-soft [&_pre]:text-primary-text [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-2 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-primary-text',
            '[&_blockquote]:border-l-4 [&_blockquote]:border-l-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:mb-2',
            '[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-2',
            '[&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-2',
            '[&_li]:mb-1',
            '[&_a]:text-primary [&_a]:underline',
            '[&_img]:max-w-full [&_img]:h-auto [&_img]:object-contain [&_img]:my-2',
            '[&_img[data-text-align="left"]]:block [&_img[data-text-align="left"]]:mr-auto',
            '[&_img[data-text-align="center"]]:block [&_img[data-text-align="center"]]:mx-auto',
            '[&_img[data-text-align="right"]]:block [&_img[data-text-align="right"]]:ml-auto',
            '[&_.is-empty:first-child::before]:content-[attr(data-placeholder)] [&_.is-empty:first-child::before]:text-muted [&_.is-empty:first-child::before]:float-left [&_.is-empty:first-child::before]:pointer-events-none [&_.is-empty:first-child::before]:h-0'
          ),
        },
        handlePaste: (_view, event) => {
          const items = event.clipboardData?.items;
          if (!items) return false;
          const fileItem = Array.from(items).find(
            (item) => item.kind === 'file' && item.type.startsWith('image/')
          );
          if (!fileItem) return false;
          const blob = fileItem.getAsFile();
          if (!blob) return false;
          event.preventDefault();
          const ed = editorInstanceRef.current;
          if (!ed) return true;
          const insert = (src: string) => {
            ed.chain()
              .focus()
              .insertContent({ type: 'image', attrs: { src } })
              .run();
          };
          const upload = onUploadImageRef.current;
          if (upload) {
            upload(blob as File)
              .then(insert)
              .catch(() => {
                const reader = new FileReader();
                reader.onload = () => insert(reader.result as string);
                reader.readAsDataURL(blob);
              });
          } else {
            const reader = new FileReader();
            reader.onload = () => insert(reader.result as string);
            reader.readAsDataURL(blob);
          }
          return true;
        },
        handleDrop: (_view, event) => {
          const file = event.dataTransfer?.files?.[0];
          if (!file?.type.startsWith('image/')) return false;
          event.preventDefault();
          const ed = editorInstanceRef.current;
          if (!ed) return true;
          const insert = (src: string) => {
            ed.chain()
              .focus()
              .insertContent({ type: 'image', attrs: { src } })
              .run();
          };
          const upload = onUploadImageRef.current;
          if (upload) {
            upload(file)
              .then(insert)
              .catch(() => {
                const reader = new FileReader();
                reader.onload = () => insert(reader.result as string);
                reader.readAsDataURL(file);
              });
          } else {
            const reader = new FileReader();
            reader.onload = () => insert(reader.result as string);
            reader.readAsDataURL(file);
          }
          return true;
        },
      },
    });

    React.useEffect(() => {
      (
        editorInstanceRef as React.MutableRefObject<ReturnType<
          typeof useEditor
        > | null>
      ).current = editor;
    }, [editor]);

    React.useImperativeHandle(ref, () => ({
      getHTML: () => editor?.getHTML() || '',
      getText: () => editor?.getText() || '',
      setContent: (content: string) => editor?.commands.setContent(content),
      clear: () => editor?.commands.clearContent(),
    }));

    if (!editor) {
      return null;
    }

    const ToolbarButton = ({
      onClick,
      isActive = false,
      ariaLabel,
      icon: Icon,
      disabled = false,
    }: {
      onClick: () => void;
      isActive?: boolean;
      ariaLabel: string;
      icon: React.ComponentType<{ className?: string }>;
      disabled?: boolean;
    }) => {
      const handleClick = () => {
        onClick();
        requestAnimationFrame(() => {
          forceUpdate();
        });
      };

      return (
        <Toggle
          pressed={isActive}
          onPressedChange={handleClick}
          disabled={disabled}
          aria-label={ariaLabel}
          size="sm"
        >
          <Icon className="size-4" aria-hidden="true" />
        </Toggle>
      );
    };

    const handleAddLink = () => {
      setLinkModalOpen(true);
      setLinkUrl('');
      setLinkText('');
    };

    const handleLinkSubmit = () => {
      if (!linkUrl.trim()) {
        return;
      }

      const text = linkText.trim() || linkUrl;
      editor
        .chain()
        .focus()
        .insertContent(`<a href="${linkUrl}">${text}</a> `)
        .run();

      setLinkModalOpen(false);
      setLinkUrl('');
      setLinkText('');
    };

    return (
      <div className={cn('w-full', className)} {...props}>
        {label && (
          <Label htmlFor={editorId} className="mb-1.5 block">
            {label}
          </Label>
        )}

        <div
          className={cn(
            'rounded-lg border border-border bg-surface overflow-hidden',
            error && 'border-error'
          )}
        >
          <div className="flex flex-nowrap items-center gap-1 p-2 border-b border-border min-w-0 overflow-x-auto">
            <div className="flex items-center gap-1 shrink-0">
              <Select
                value={
                  editor.isActive('heading', { level: 1 })
                    ? '1'
                    : editor.isActive('heading', { level: 2 })
                      ? '2'
                      : editor.isActive('heading', { level: 3 })
                        ? '3'
                        : editor.isActive('heading', { level: 4 })
                          ? '4'
                          : 'paragraph'
                }
                onValueChange={(v) => {
                  if (v === 'paragraph') {
                    editor.chain().focus().setParagraph().run();
                  } else {
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({ level: Number(v) as 1 | 2 | 3 | 4 })
                      .run();
                  }
                  forceUpdate();
                }}
              >
                <SelectTrigger className="w- h-8 w-[4rem]">
                  <SelectValue placeholder="Text" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="paragraph">P</SelectItem>
                  <SelectItem value="1">H1</SelectItem>
                  <SelectItem value="2">H2</SelectItem>
                  <SelectItem value="3">H3</SelectItem>
                  <SelectItem value="4">H4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator orientation="vertical" className="h-6 mx-1 shrink-0" />

            <div className="flex items-center gap-1 shrink-0">
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                ariaLabel="Bold"
                icon={Bold}
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
                ariaLabel="Italic"
                icon={Italic}
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                isActive={editor.isActive('underline')}
                ariaLabel="Underline"
                icon={UnderlineIcon}
              />
            </div>

            <Separator orientation="vertical" className="h-6 mx-1 shrink-0" />

            <div className="flex items-center gap-1 shrink-0">
              <ToolbarButton
                onClick={() =>
                  editor.chain().focus().setTextAlign('left').run()
                }
                isActive={editor.isActive({ textAlign: 'left' })}
                ariaLabel="Align left"
                icon={AlignLeft}
              />
              <ToolbarButton
                onClick={() =>
                  editor.chain().focus().setTextAlign('center').run()
                }
                isActive={editor.isActive({ textAlign: 'center' })}
                ariaLabel="Align center"
                icon={AlignCenter}
              />
              <ToolbarButton
                onClick={() =>
                  editor.chain().focus().setTextAlign('right').run()
                }
                isActive={editor.isActive({ textAlign: 'right' })}
                ariaLabel="Align right"
                icon={AlignRight}
              />
            </div>

            <Separator orientation="vertical" className="h-6 mx-1 shrink-0" />

            <div className="flex items-center gap-1 shrink-0">
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                ariaLabel="Bullet list"
                icon={List}
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
                ariaLabel="Ordered list"
                icon={ListOrdered}
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
                ariaLabel="Blockquote"
                icon={Quote}
              />
              <ToolbarButton
                onClick={handleAddLink}
                ariaLabel="Add link"
                icon={LinkIcon}
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                ariaLabel="Horizontal rule"
                icon={Minus}
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                isActive={editor.isActive('codeBlock')}
                ariaLabel="Code block"
                icon={Code}
              />
            </div>

            {editable && (
              <>
                <Separator
                  orientation="vertical"
                  className="h-6 mx-1 shrink-0"
                />
                <div className="flex items-center gap-1 shrink-0 ml-auto">
                  <ToolbarButton
                    onClick={() => editor.chain().focus().clearContent().run()}
                    ariaLabel="Clear content"
                    icon={Trash2}
                  />
                </div>
              </>
            )}
          </div>

          <div id={editorId}>
            <EditorContent editor={editor} />
          </div>
        </div>

        {error && (
          <p className="mt-1.5 text-xs text-error-text" role="alert">
            {error}
          </p>
        )}

        <Dialog open={linkModalOpen} onOpenChange={setLinkModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Link</DialogTitle>
              <DialogDescription>
                Enter the URL and optional text for the link.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="link-url">URL</Label>
                <Input
                  id="link-url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && linkUrl.trim()) {
                      handleLinkSubmit();
                    }
                    if (e.key === 'Escape') {
                      setLinkModalOpen(false);
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link-text">Link text (optional)</Label>
                <Input
                  id="link-text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Leave empty to use URL"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && linkUrl.trim()) {
                      handleLinkSubmit();
                    }
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setLinkModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleLinkSubmit} disabled={!linkUrl.trim()}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);

TextEditor.displayName = 'TextEditor';

export type { TextEditorProps };
