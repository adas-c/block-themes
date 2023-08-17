import { RichText, BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";

wp.blocks.registerBlockType("ourblocktheme/genericheading", {
	title: "Generic Heading",
	attributes: {
		text: { type: "string" },
		size: { type: "string", default: "large" },
	},
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={props.attributes.size === "large"}
						onClick={() => props.setAttributes({ size: "large" })}
					>
						Large
					</ToolbarButton>
					<ToolbarButton
						isPressed={props.attributes.size === "medium"}
						onClick={() => props.setAttributes({ size: "medium" })}
					>
						Medium
					</ToolbarButton>
					<ToolbarButton
						isPressed={props.attributes.size === "small"}
						onClick={() => props.setAttributes({ size: "small" })}
					>
						Small
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				allowedFormats={["core/bold", "core/italic"]}
				tagName="h1"
				className={`headline headline--${props.attributes.size}`}
				value={props.attributes.text}
				onChange={(e) => props.setAttributes({ text: e })}
			/>
		</>
	);
}

function SaveComponent(props) {
	function createTagName() {
		if (props.attributes.size === "large") return "h1";
		if (props.attributes.size === "medium") return "h2";
		if (props.attributes.size === "small") return "h3";
	}

	return (
		<RichText.Content
			tagName={createTagName()}
			value={props.attributes.text}
			className={`headline headline--${props.attributes.size}`}
		/>
	);
}
