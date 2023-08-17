import { useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

wp.blocks.registerBlockType("ourblocktheme/banner", {
	title: "Banner",
	supports: {
		align: ["full"],
	},
	attributes: {
		align: { type: "string", default: "full" },
		imgId: { type: "number" },
		imgURL: { type: "string", default: banner.fallbackimage },
	},
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent(props) {
	const useMeLater = (
		<>
			<h1 class="headline headline--large">Welcome!</h1>
			<h2 class="headline headline--medium">
				We think you&rsquo;ll like it here.
			</h2>
			<h3 class="headline headline--small">
				Why don&rsquo;t you check out the <strong>major</strong> you&rsquo;re
				interested in?
			</h3>
			<a
				href="<?php echo get_post_type_archive_link('program') ?>"
				class="btn btn--large btn--blue"
			>
				Find Your Major
			</a>
		</>
	);

	function onFileSelect(x) {
		props.setAttributes({ imgId: x.id });
	}

	useEffect(() => {
		if (props.attributes.imgId) {
			async function go() {
				const response = await apiFetch({
					path: `/wp/v2/media/${props.attributes.imgId}`,
					method: "GET",
				});
				props.setAttributes({
					imgURL: response.media_details.sizes.pageBanner.source_url,
				});
			}
			go();
		}
	}, [props.attributes.imgId]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Background" initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onFileSelect}
							value={props.attributes.imgId}
							render={({ open }) => {
								return <Button onClick={open}>Choose Image</Button>;
							}}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<div className="page-banner">
				<div
					className="page-banner__bg-image"
					style={{
						backgroundImage: `url('${props.attributes.imgURL}')`,
					}}
				></div>
				<div className="page-banner__content container t-center c-white">
					<InnerBlocks
						allowedBlocks={[
							"ourblocktheme/genericheading",
							"ourblocktheme/genericbutton",
						]}
					/>
				</div>
			</div>
		</>
	);
}

function SaveComponent() {
	return <InnerBlocks.Content />;
}
