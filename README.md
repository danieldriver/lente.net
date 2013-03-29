Lente.net
=========

Lente.net is the open-access press behind the Journal for Scripture &
Theology. The word is a Latin adverb meaning "slowly," as in the old
oxymoron *festina lente*: make haste slowly. Since it's an internet
publication, the *festina* part is taken as read.

Technical Requirements
----------------------

For the sake of access and durability, the site's code and the
contents of its publications are released on GitHub. This has several
benefits. It is also a factor in the decision to compile the site with
[Jekyll][jekyll], the static site generator used to build GitHub pages.

[Pandoc][pandoc] is another key component (its [source][jgm]). It
allows the editors to automatically transform plain-text files written
in [markdown][df] &mdash; or, to be precise, a [superset of markdown][pandoc-md]
with enhancements useful for academic writing &mdash; into a variety of
formats, including HTML, PDF (via LaTeX), and ePub.

Jekyll does not support pandoc natively, which unfortunately means
that GitHub can only serve as an imperfect mirror of Lente.net.
Happily, the [jekyll-pandoc-multiple-formats][fauno] plugin provides
the necessary functionality in other environments. A word of warning,
though: the pandoc plugin makes jekyll processor hungry, particulary
when multiple formats are requested. It is generally not desirable to
use the plugin while running `$ jekyll --server --auto`.

LaTeX is an *éminence grise* in open-source software, and it is widely
used in the academy &mdash; though only rarely in biblical and theological
studies. It allows one to produce photo-ready PDFs of high quality and
to precise specifications. (It works on all major platforms. Mac
users, get [MacTeX][mactex].) Thanks to pandoc, it can take a much
simplified markdown file as an input as well.

For digital machinery, then, Lente.net relies on the following:

  * git (version control)
  * jekyll (static site generator)
  * pandoc (article format conversion)
  * LaTeX (generation of PDFs)

Finally, the publication uses David Březina's [Skolar typeface][skolar]
in the generation of its PDFs, and also licences it for web use. This
is the only aspect of the site that is not open source.

[jekyll]: https://github.com/mojombo/jekyll
[pandoc]: http://johnmacfarlane.net/pandoc/
[jgm]: https://github.com/jgm/pandoc
[df]: http://daringfireball.net/projects/markdown/
[pandoc-md]: http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown
[fauno]: https://github.com/fauno/jekyll-pandoc-multiple-formats
[mactex]: http://tug.org/mactex/
[skolar]: http://www.rosettatype.com/Skolar

Take a Look Without the Dependencies
------------------------------------

Friends with web development skills, I'd welcome your comments and
input. Take a look at `demo.html`, in the root directory. It's a
pre-compiled mockup of an article, and it calls on `screen.css` and
other files in the `assets` folder.


Roadmap
-------

- [x] v0.1 - block out basic design elements, bring over reviews from  @scripturetheology
- [x] v0.2 - finalize basic design elements, set up Jekyll to process book reviews
- [ ] v0.3 - build out web side of remaing publication types: articles, notes, lists
- [ ] v0.4 - create HTML indexes for site and each publication type
- [ ] v0.5 - using `pandoc.rb`, integrate Jekyll with LaTeX and other outputs
- [ ] v0.6 - customize LaTeX typesetting (Skolar, ragged right, margin notes)
- [ ] v0.7 - integrate metadata with CrossRef DOIs
- [ ] v0.8 - tk
