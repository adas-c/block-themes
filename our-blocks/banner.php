<?php 

  if (!isset($attributes['imgURL'])) {
    get_theme_file_uri('/images/library-hero.jpg');
  }

?>

<div className="page-banner">
  <div
    className="page-banner__bg-image" style="background-image: url('<?php echo $attributes['imgURL']; ?>')"
  ></div>
  <div className="page-banner__content container t-center c-white">
    <?php echo $content; ?>
  </div>
</div>

