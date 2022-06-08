/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Underline, Strikethrough, Superscript, Subscript, Code } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, AutoImage, ImageResize, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { Link, AutoLink, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { HtmlComment } from '@ckeditor/ckeditor5-html-support';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Pagination } from '@ckeditor/ckeditor5-pagination';
import {
	RealTimeCollaborativeComments,
	RealTimeCollaborativeRevisionHistory,
	RealTimeCollaborativeTrackChanges
} from '@ckeditor/ckeditor5-real-time-collaboration';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { StandardEditingMode } from '@ckeditor/ckeditor5-restricted-editing';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar, TableCellProperties, TableProperties, TableCaption } from '@ckeditor/ckeditor5-table';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { WordCount } from '@ckeditor/ckeditor5-word-count';

class ClassicEditor extends ClassicEditorBase {}

class InlineEditor extends InlineEditorBase {}

class BalloonEditor extends BalloonEditorBase {}

class DecoupledEditor extends DecoupledEditorBase {}

for ( const Editor of [ ClassicEditor, InlineEditor, BalloonEditor, DecoupledEditor ] ) {
	// Plugins to include in the build.
	Editor.builtinPlugins = [
		Alignment,
		Autoformat,
		Bold, Italic, Underline, Strikethrough, Superscript, Subscript, Code,
		BlockQuote,
		CloudServices,
		CodeBlock,
		Comments,
		EasyImage,
		Essentials,
		ExportPdf,
		ExportWord,
		Heading,
		Image, ImageCaption, ImageStyle, ImageToolbar, AutoImage, ImageResize, ImageUpload,
		Indent, IndentBlock,
		TextPartLanguage,
		Link, AutoLink, LinkImage,
		List, ListProperties, TodoList,
		MediaEmbed,
		Paragraph,
		FindAndReplace,
		FontBackgroundColor, FontColor, FontFamily, FontSize,
		Highlight,
		HorizontalLine,
		HtmlEmbed,
		HtmlComment,
		Mention,
		PageBreak,
		PasteFromOffice,
		Pagination,
		RealTimeCollaborativeComments,
		RealTimeCollaborativeRevisionHistory,
		RealTimeCollaborativeTrackChanges,
		RemoveFormat,
		RevisionHistory,
		StandardEditingMode,
		SourceEditing,
		SpecialCharacters, SpecialCharactersEssentials,
		Table, TableToolbar, TableCellProperties, TableProperties, TableCaption,
		TrackChanges,
		TextTransformation,
		WordCount
	];

	// Editor configuration.
	Editor.defaultConfig = {
		toolbar: [
			'pagination',
			'|',
			'trackChanges', 'revisionHistory', 'comment',
			'|',
			'heading',
			'|',
			'removeFormat', 'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'link',
			'|',
			'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
			'|',
			'bulletedList', 'numberedList', 'todoList',
			'|',
			'blockQuote', 'uploadImage', 'insertTable', 'mediaEmbed', 'codeBlock',
			'|',
			'htmlEmbed',
			'|',
			'alignment', 'outdent', 'indent',
			'|',
			'pageBreak', 'horizontalLine', 'specialCharacters',
			'|',
			'textPartLanguage',
			'|',
			'undo', 'redo', 'findAndReplace'
		],
		table: {
			contentToolbar: [
				'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption'
			]
		},
		image: {
			styles: [
				'alignCenter',
				'alignLeft',
				'alignRight'
			],
			resizeOptions: [
				{
					name: 'resizeImage:original',
					label: 'Original size',
					value: null
				},
				{
					name: 'resizeImage:50',
					label: '50%',
					value: '50'
				},
				{
					name: 'resizeImage:75',
					label: '75%',
					value: '75'
				}
			],
			toolbar: [
				'imageTextAlternative', 'toggleImageCaption', '|',
				'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side', '|',
				'resizeImage'
			],
			insert: {
				integrations: [
					'insertImageViaUrl'
				]
			}
		},
		comments: {
			editorConfig: {
				extraPlugins: [ Bold, Italic, Underline, List ]
			}
		},
		pagination: {
			// A4
			pageWidth: '21cm',
			pageHeight: '29.7cm',

			pageMargins: {
				top: '20mm',
				bottom: '20mm',
				right: '12mm',
				left: '12mm'
			}
		},
		placeholder: 'Type the content here!',
		language: 'en'
	};

	// Enable the `SourceEditing` plugin for ClassicEditor only.
	if ( Editor === ClassicEditor ) {
		Editor.builtinPlugins.push( SourceEditing );

		Editor.defaultConfig.toolbar.push( '|', 'sourceEditing' );
	}
}

export default {
	ClassicEditor, InlineEditor, BalloonEditor, DecoupledEditor
};
