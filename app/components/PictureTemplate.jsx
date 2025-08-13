
// export default function ProjectSideBar() {
//     return (
//         <p>sidebar</p>
//     )
// }

export default function PictureTemplate({
    avifTemplate,
    fallbackTemplate,
    widths,
    sizes, 
    alt,
    className = "",
    loading = "lazy",
    decoding = "async",
    fetchPriority,
    width, 
    height 
}) {
    const build = (tpl) => widths.map(w => `${tpl.replace("{w}", w)} ${w}w`).join(", ");
    const avifSrcSet = build(avifTemplate);
    const fallbackSrcSet = build(fallbackTemplate);
    const fallbackSrc = fallbackTemplate.replace("{w}", Math.max(...widths)); // base src

    return (
        <picture className={className}>
        <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
        <img
            src={fallbackSrc}
            srcSet={fallbackSrcSet}
            sizes={sizes}
            alt={alt}
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            width={width}
            height={height}
            style={{ width: "100%", height: "auto" }}
        />
        </picture>
    );
}
