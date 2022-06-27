import { parseBibFile, normalizeFieldValue } from "bibtex";

interface IBibtex {
    bibkey: string;
    publish_type: string;
    authors: Array<string>;
    year: number;
    title: string;
    publish: string;
}

function parse_bibtex(bibtex_array: Array<string>):Array<IBibtex> {
    var new_bibtex_array: Array<IBibtex> = [];

    bibtex_array.forEach(bibtex => {
        const bibFile = parseBibFile(bibtex);

        // console.log(bibFile);

        const bibkey = bibFile.content[0]._id
        const publish_type = bibFile.content[0].type

        const entry = bibFile.getEntry(bibkey);

        // 作者 authors 数组哦
        const authors: Array<string> = entry.getField("author").data.join('').split('and');
        for (let i = 0; i < authors.length; i++) {
            authors[i] = authors[i].trim();
        }

        // 年份 year
        const year: number = Number(entry.getField("year").data[0]);

        // 标题 title
        const title: string = entry.getField("title").data.join('');
        // console.log(bibkey,publish_type,year,title);


        // 根据类型提取会议/期刊名
        var publish;        
        if ((publish_type == "article") || (publish_type == "ARTICLE")) {
            publish = bibFile.content[0].fields.journal.data.join('');
        }
        else if ((publish_type == "inproceedings") || (publish_type == "INPROCEEDINGS")) {
            publish = bibFile.content[0].fields.inproceedings.data.join('');
        }

        var new_bibtex:IBibtex={
            bibkey: bibkey,
            publish_type: publish_type,
            authors: authors,
            year: year,
            title: title,
            publish: publish
        }
        new_bibtex_array.push(new_bibtex)
    })
    return new_bibtex_array;
}
export default parse_bibtex;