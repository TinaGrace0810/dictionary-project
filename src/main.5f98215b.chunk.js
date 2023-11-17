(this.webpackJsonpdictionary = this.webpackJsonpdictionary || []).push([
  [0],
  {
    19: function (e, n, t) {},
    39: function (e, n, t) {},
    41: function (e, n, t) {},
    42: function (e, n, t) {},
    43: function (e, n, t) {},
    44: function (e, n, t) {},
    45: function (e, n, t) {},
    46: function (e, n, t) {},
    47: function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(1),
        i = t.n(c),
        s = t(14),
        o = t.n(s),
        r = (t(19), t.p + "static/media/logo.951ad035.png"),
        a = t(5),
        l = t.n(a),
        d = (t(39), t(0));
      function h(e) {
        return e.synonyms
          ? Object(d.jsxs)("div", {
              className: "Synonyms",
              children: [
                Object(d.jsx)("strong", {
                  children: "Similar:",
                }),
                Object(d.jsx)("ul", {
                  children: e.synonyms.map(function (e, n) {
                    return Object(d.jsx)(
                      "li",
                      {
                        children: e,
                      },
                      n
                    );
                  }),
                }),
              ],
            })
          : null;
      }
      t(41);
      function j(e) {
        return e.meaning
          ? Object(d.jsxs)("div", {
              className: "Meaning",
              children: [
                Object(d.jsx)("h3", {
                  children: e.meaning.partOfSpeech,
                }),
                Object(d.jsx)("p", {
                  children: e.meaning.definition,
                }),
                Object(d.jsx)("em", {
                  children: e.meaning.example,
                }),
                Object(d.jsx)(h, {
                  synonyms: e.meaning.synonyms,
                }),
              ],
            })
          : null;
      }
      t(42);
      function u(e) {
        return e.phonetic
          ? Object(d.jsx)("div", {
              className: "Phonetic",
              children: Object(d.jsx)("h2", {
                children: e.phonetic,
              }),
            })
          : null;
      }
      t(43);
      function f(e) {
        return e.definition
          ? Object(d.jsxs)("div", {
              className: "Result",
              children: [
                Object(d.jsxs)("section", {
                  children: [
                    Object(d.jsx)("h1", {
                      children: e.definition.word,
                    }),
                    Object(d.jsx)(u, {
                      phonetic: e.definition.phonetic,
                    }),
                  ],
                }),
                e.definition.meanings.map(function (e, n) {
                  return Object(d.jsx)(
                    "section",
                    {
                      children: Object(d.jsx)(j, {
                        meaning: e,
                      }),
                    },
                    n
                  );
                }),
              ],
            })
          : null;
      }
      t(44);
      function b(e) {
        return e.photos.length
          ? Object(d.jsx)("section", {
              className: "Photos",
              children: Object(d.jsx)("div", {
                className: "row",
                children: e.photos.map(function (e, n) {
                  return Object(d.jsx)(
                    "div",
                    {
                      className: "col-4",
                      children: Object(d.jsx)("a", {
                        href: e.src.original,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(d.jsx)("img", {
                          src: e.src.landscape,
                          className: "img-fluid",
                          alt: e.photographer,
                        }),
                      }),
                    },
                    n
                  );
                }),
              }),
            })
          : null;
      }
      t(45);
      function p(e) {
        const [n, t] = Object(c.useState)(e.defaultKeyword),
          [i, s] = Object(c.useState)(!1),
          [o, r] = Object(c.useState)(null),
          [a, h] = Object(c.useState)([]);
        function j(e) {
          h(e.data.photos);
        }
        function u(e) {
          r(e.data);
          let n = "eac360db5fc86ft86450f3693e73o43f",
            t = "https://api.shecodes.io/images/v1/search?query="
              .concat(e.data.word, "&key=")
              .concat(n);
          l.a
            .get(t, {
              headers: {
                Authorization: "Bearer ".concat(n),
              },
            })
            .then(j);
        }
        function p() {
          let e = "https://api.shecodes.io/dictionary/v1/define?word="
            .concat(n, "&key=")
            .concat("eac360db5fc86ft86450f3693e73o43f");
          l.a.get(e).then(u);
        }
        return i
          ? Object(d.jsxs)("div", {
              className: "Dictionary",
              children: [
                Object(d.jsxs)("section", {
                  children: [
                    Object(d.jsxs)("form", {
                      onSubmit: function (e) {
                        e.preventDefault(), p();
                      },
                      children: [
                        Object(d.jsx)("label", {
                          children: "What word do you want to look up?",
                        }),
                        Object(d.jsx)("input", {
                          type: "search",
                          placeholder: "Search for a word",
                          defaultValue: e.defaultKeyword,
                          autoFocus: !0,
                          className: "form-control search-input",
                          onChange: function (e) {
                            t(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(d.jsx)("small", {
                      className: "hint",
                      children: "i.e. paris, wine, yoga, coding",
                    }),
                  ],
                }),
                Object(d.jsx)(f, {
                  definition: o,
                }),
                Object(d.jsx)(b, {
                  photos: a,
                }),
              ],
            })
          : (s(!0), p(), "Loading!");
      }
      t(46);
      var O = function () {
        return Object(d.jsx)("div", {
          className: "App",
          children: Object(d.jsxs)("div", {
            className: "container",
            children: [
              Object(d.jsx)("header", {
                className: "App-header",
                children: Object(d.jsx)("a", {
                  href: "https://www.shecodes.io/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: Object(d.jsx)("img", {
                    src: r,
                    className: "logo",
                    alt: "SheCodes Logo",
                  }),
                }),
              }),
              Object(d.jsx)(p, {
                defaultKeyword: "sunset",
              }),
              Object(d.jsxs)("footer", {
                children: [
                  "This project was coded by",
                  " ",
                  Object(d.jsx)("a", {
                    href: "https://www.shecodes.io/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "SheCodes",
                  }),
                  " ",
                  "and is",
                  " ",
                  Object(d.jsx)("a", {
                    href: "https://github.com/shecodesio/dictionary",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "open-sourced on GitHub",
                  }),
                  " ",
                  "and",
                  " ",
                  Object(d.jsx)("a", {
                    href: "https://shecodes-dictionary.netlify.app/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "hosted on Netlify",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var m = (e) => {
        e &&
          e instanceof Function &&
          t
            .e(3)
            .then(t.bind(null, 48))
            .then((n) => {
              let {
                getCLS: t,
                getFID: c,
                getFCP: i,
                getLCP: s,
                getTTFB: o,
              } = n;
              t(e), c(e), i(e), s(e), o(e);
            });
      };
      o.a.render(
        Object(d.jsx)(i.a.StrictMode, {
          children: Object(d.jsx)(O, {}),
        }),
        document.getElementById("root")
      ),
        m();
    },
  },
  [[47, 1, 2]],
]);
//# sourceMappingURL=main.5f98215b.chunk.js.map
