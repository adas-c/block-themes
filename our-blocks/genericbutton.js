import ourColors from "../inc/ourColor";
import { useState } from "@wordpress/element";
import {
	RichText,
	InspectorControls,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	getColorObjectByColorValue,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	PanelBody,
	PanelRow,
	ColorPalette,
	ToolbarButton,
	Popover,
	Button,
} from "@wordpress/components";
import { link } from "@wordpress/icons";

wp.blocks.registerBlockType("ourblocktheme/genericbutton", {
	title: "Generic Button",
	attributes: {
		text: { type: "string" },
		size: { type: "string", default: "large" },
		linkObject: { type: "object", default: { url: "" } },
		colorName: { type: "string", default: "blue" },
	},
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	const [isOpenLink, setIsOpenLink] = useState(false);

	function buttonHandler() {
		setIsOpenLink((prev) => !prev);
	}

	function handleLinkChange(newLink) {
		props.setAttributes({ linkObject: newLink });
	}

	const currentColorValue = ourColors.filter((color) => {
		return color.name === props.attributes.colorName;
	})[0].color;

	function handleColorPicker(colorCode) {
		const { name } = getColorObjectByColorValue(ourColors, colorCode);
		props.setAttributes({ colorName: name });
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={buttonHandler} icon={link}></ToolbarButton>
				</ToolbarGroup>
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
			<InspectorControls>
				<PanelBody title="Color" initialOpen={true}>
					<PanelRow>
						<ColorPalette
							disableCustomColors={true}
							clearable={false}
							colors={ourColors}
							value={currentColorValue}
							onChange={handleColorPicker}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<RichText
				allowedFormats={[]}
				tagName="a"
				className={`btn btn--${props.attributes.size} btn--${props.attributes.colorName}`}
				value={props.attributes.text}
				onChange={(e) => props.setAttributes({ text: e })}
			/>
			{isOpenLink && (
				<Popover
					position="middle center"
					onFocusOutside={() => setIsOpenLink(false)}
				>
					<LinkControl
						settings={[]}
						value={props.attributes.linkObject}
						onChange={handleLinkChange}
					/>
					<Button
						variant="primary"
						onClick={() => setIsOpenLink(false)}
						style={{ display: "block", width: "100%" }}
					>
						Confirm link
					</Button>
				</Popover>
			)}
		</>
	);
}

function SaveComponent(props) {
	return (
		<a
			href={props.attributes.linkObject.url}
			className={`btn btn--${props.attributes.size} btn--${props.attributes.colorName}`}
		>
			{props.attributes.text}
		</a>
	);
}
