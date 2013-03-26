Lente.net
=========

Lente.net is the open-access press behind the Journal for Scripture &
Theology. The word is a Latin adverb meaning "slowly," as in the old
oxymoron *festina lente*: make haste slowly. Since it's an internet
publication, the *festina* part is taken as read.

Technical Details
-----------------

For the sake of access and durability, the site's code and the
contents of its publications are released on GitHub. This has several
benefits. It is also a factor in the decision to compile the site with
[Jekyll][jekyll], the static site generator used to build GitHub pages.

[Pandoc][pandoc] is another key component (its [source][jgm]). It
allows the editors to automatically transform plain-text files written
in [markdown][df] -- or, to be precise, a [superset of markdown][pandoc-md]
with enhancements useful for academic writing -- into a variety of
formats, including HTML, PDF (via LaTeX), and ePub.

Jekyll does not support pandoc natively, which unfortunately means
that GitHub can only serve as an imperfect mirror of Lente.net.
Happily, the [jekyll-pandoc-multiple-formats][fauno] plugin provides
the necessary functionality in other environments. A word of warning,
though: the pandoc plugin makes jekyll processor hungry, particulary
when multiple formats are requested. It is generally not desirable to
use the plugin while running `$ jekyll --server --auto`.

LaTeX is an *éminence grise* in open-source software, and it is widely
used in the academy -- though only rarely in biblical and theological
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

Friends with web development skills, I'd welcome your help.
Take a look at demo.html, in the root directory. It's a pre-compiled mockup
of an article, and it calls on .css and other assets in the `-` folder.

### To Jamie:

As much as possible I have tried to keep the markup clean, and to avoid any
scripting cruft. However, I have resorted to jQuery to achieve a particular
bit of layout.

The goal is to place footnotes in the margin, across from where the footnote anchor
appears in the body text. This could easily be done with relative and absolute positioning
*if* the footnotes and the footnote references were not children of the same parent.
Unless I've missed something, it's not possible if they are siblings. Am I missing something?

There's also the problem of what to do if footnote #n is very long and spills 
into footnote #n+1. This, too, seems to call for scripting, and its beyond my
meager experience with javascript / jQuery.

Thanks for any input!

Daniel Driver  
26 March 2013