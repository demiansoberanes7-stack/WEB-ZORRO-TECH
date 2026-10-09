<?php
// Este archivo sirve únicamente para que Facebook, WhatsApp y Twitter puedan leer 
// los metadatos (portada, título, descripción) del blog.
$id = isset($_GET['id']) ? $_GET['id'] : '';
$blogs_json = file_get_contents('https://raw.githubusercontent.com/demiansoberanes7-stack/WEB-ZORRO-TECH/main/src/data/blogs.json?t=' . time());
$blogs = json_decode($blogs_json, true);

$title = "Zorro Tech — Blog";
$description = "Zorro Tech";
$image = "https://zorrotech.online/assets/zorro-logo.jpg";
$url = "https://zorrotech.online/blog/" . $id;

if ($blogs) {
    foreach ($blogs as $blog) {
        if ($blog['id'] === $id) {
            $title = $blog['title'];
            $description = $blog['description'];
            $image = $blog['coverUrl'];
            break;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:description" content="<?php echo htmlspecialchars($description); ?>" />
    <meta property="og:image" content="<?php echo htmlspecialchars($image); ?>" />
    <meta property="og:url" content="<?php echo htmlspecialchars($url); ?>" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta name="twitter:description" content="<?php echo htmlspecialchars($description); ?>" />
    <meta name="twitter:image" content="<?php echo htmlspecialchars($image); ?>" />
</head>
<body>
    <script>window.location.href = "<?php echo $url; ?>";</script>
</body>
</html>
