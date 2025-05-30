(this.webpackJsonpchance = this.webpackJsonpchance || []).push([
  [0],
  {
    35: function (e, t, a) {},
    36: function (e, t, a) {
      'use strict';
      a.r(t);
      var c = a(0),
        i = a.n(c),
        n = a(11),
        r = a.n(n),
        s = a(10),
        d = a(57),
        o = a(64),
        l = a(2),
        j = Object(d.a)(function (e) {
          return Object(o.a)({
            root: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          });
        });
      var b = function (e) {
          var t = e.children,
            a = j();
          return Object(l.jsx)('div', { className: a.root, children: t });
        },
        h = a(60),
        m = a(59),
        x = Object(d.a)(function (e) {
          return Object(o.a)({
            wrapper: {
              height: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70vh',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 10px 10px #fff',
            },
            img: { marginRight: e.spacing(2) },
            flex: { display: 'flex' },
            rightBorder: {
              borderRight: '2px solid black',
              display: 'flex',
              alignItems: 'center',
            },
            info: { marginLeft: e.spacing(2) },
            item: { marginTop: e.spacing(2) },
          });
        });
      var g = function () {
          var e = x();
          return Object(l.jsx)('div', {
            className: e.wrapper,
            children: Object(l.jsxs)('div', {
              className: e.flex,
              children: [
                Object(l.jsx)('div', {
                  className: e.rightBorder,
                  children: Object(l.jsx)(m.a, {
                    variant: 'circle',
                    width: 250,
                    height: 250,
                    className: e.img,
                  }),
                }),
                Object(l.jsxs)('div', {
                  className: e.info,
                  children: [
                    Object(l.jsx)('div', {
                      className: e.item,
                      children: Object(l.jsx)(h.a, {
                        badgeContent: '\u0418\u043c\u044f',
                        color: 'secondary',
                        children: Object(l.jsx)(m.a, {
                          variant: 'text',
                          width: 200,
                          height: 50,
                        }),
                      }),
                    }),
                    Object(l.jsx)('div', {
                      className: e.item,
                      children: Object(l.jsx)(h.a, {
                        badgeContent:
                          '\u0424\u0430\u043c\u0438\u043b\u0438\u044f',
                        color: 'secondary',
                        children: Object(l.jsx)(m.a, {
                          variant: 'text',
                          width: 200,
                          height: 50,
                        }),
                      }),
                    }),
                    Object(l.jsx)('div', {
                      className: e.item,
                      children: Object(l.jsx)(h.a, {
                        badgeContent: '\u0413\u043e\u0440\u043e\u0434',
                        color: 'primary',
                        children: Object(l.jsx)(m.a, {
                          variant: 'text',
                          width: 200,
                          height: 50,
                        }),
                      }),
                    }),
                    Object(l.jsx)('div', {
                      className: e.item,
                      children: Object(l.jsx)(h.a, {
                        badgeContent: '\u0411\u0430\u043b\u0430\u043d\u0441',
                        color: 'error',
                        children: Object(l.jsx)(m.a, {
                          variant: 'rect',
                          width: 200,
                          height: 90,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = a(65),
        O = a(61),
        f = a.p + 'static/media/icon.3c4952bf.png',
        u = Object(d.a)(function (e) {
          return Object(o.a)({
            wrapper: {
              height: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70vh',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 10px 10px #fff',
            },
            img: { width: 250, height: 250, marginRight: e.spacing(2) },
            flex: { display: 'flex' },
            rightBorder: {
              borderRight: '2px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            info: { marginLeft: e.spacing(2) },
            item: { marginTop: e.spacing(2) },
            standartItem: {
              width: 200,
              height: 50,
              border: '2px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            bigItem: {
              width: 185,
              height: 90,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            bigItemText: { fontSize: 30, margin: e.spacing(1) },
            coin: { border: '2px solid #000' },
          });
        });
      var v = function (e) {
          var t = e.user,
            a = u(),
            c = i.a.useState('border-gradient-rare'),
            n = Object(s.a)(c, 2),
            r = n[0],
            d = n[1];
          return (
            i.a.useEffect(function () {
              t.points < 1e3 && d('border-gradient-rare'),
                t.points >= 1e3 &&
                  t.points < 2e3 &&
                  d('border-gradient-silver'),
                t.points >= 2e3 && t.points < 3e3 && d('border-gradient-gold'),
                t.points >= 3e3 && d('border-gradient-top');
            }, []),
            Object(l.jsx)('div', {
              className: a.wrapper,
              children: Object(l.jsxs)('div', {
                className: a.flex,
                children: [
                  Object(l.jsx)('div', {
                    className: a.rightBorder,
                    children: Object(l.jsx)(p.a, {
                      src: 'http://localhost:8888/images/'.concat(t.img),
                      className: a.img,
                      alt: 'User image',
                    }),
                  }),
                  Object(l.jsx)('div', {
                    className: a.info,
                    children: Object(l.jsxs)('div', {
                      children: [
                        Object(l.jsx)('div', {
                          className: a.item,
                          children: Object(l.jsx)(h.a, {
                            badgeContent: '\u0418\u043c\u044f',
                            color: 'secondary',
                            children: Object(l.jsx)(O.a, {
                              className: a.standartItem,
                              children: t.name,
                            }),
                          }),
                        }),
                        Object(l.jsx)('div', {
                          className: a.item,
                          children: Object(l.jsx)(h.a, {
                            badgeContent:
                              '\u0424\u0430\u043c\u0438\u043b\u0438\u044f',
                            color: 'secondary',
                            children: Object(l.jsx)(O.a, {
                              className: a.standartItem,
                              children: t.last_name,
                            }),
                          }),
                        }),
                        Object(l.jsx)('div', {
                          className: a.item,
                          children: Object(l.jsx)(h.a, {
                            badgeContent: '\u0413\u043e\u0440\u043e\u0434',
                            color: 'primary',
                            children: Object(l.jsx)(O.a, {
                              className: a.standartItem,
                              children: t.city,
                            }),
                          }),
                        }),
                        Object(l.jsx)('div', {
                          className: a.item,
                          children: Object(l.jsx)(h.a, {
                            badgeContent:
                              '\u0411\u0430\u043b\u0430\u043d\u0441',
                            color: 'error',
                            children: Object(l.jsxs)('div', {
                              className: a.bigItem,
                              id: r,
                              children: [
                                Object(l.jsx)('p', {
                                  className: a.bigItemText,
                                  children: t.points,
                                }),
                                Object(l.jsx)(p.a, {
                                  alt: 'Coin image',
                                  src: f,
                                  className: a.coin,
                                  children: '?',
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        N = a(63),
        y = a.p + 'static/media/reader.c56d690f.svg',
        w = Object(d.a)(function (e) {
          return Object(o.a)({
            wrapper: { width: '60vh' },
            flex: {
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            chip: { height: '40px', fontSize: 15 },
            border: { margin: e.spacing(2), borderBottom: '2px solid #fff' },
          });
        });
      var C = function () {
          var e = w();
          return Object(l.jsxs)('div', {
            className: e.wrapper,
            children: [
              Object(l.jsx)('div', {
                className: e.flex,
                children: Object(l.jsx)(N.a, {
                  className: e.chip,
                  color: 'default',
                  label:
                    '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 NFC \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u0435\u043b\u044c',
                }),
              }),
              Object(l.jsx)('div', { className: e.border }),
              Object(l.jsx)('div', {
                className: e.flex,
                children: Object(l.jsx)('img', { src: y, alt: 'Reader' }),
              }),
            ],
          });
        },
        I = a(62),
        S = new WebSocket('ws://localhost:8000'),
        k = i.a.createContext(S);
      var B = function () {
        var e = i.a.useContext(k),
          t = i.a.useState('disconnected'),
          a = Object(s.a)(t, 2),
          c = a[0],
          n = a[1],
          r = i.a.useState(''),
          d = Object(s.a)(r, 2),
          o = (d[0], d[1]),
          j = i.a.useState({
            name: '',
            last_name: '',
            city: '',
            points: 0,
            img: '',
          }),
          h = Object(s.a)(j, 2),
          m = h[0],
          x = h[1];
        return (
          (e.onopen = function () {
            return n('connected');
          }),
          (e.onclose = function () {
            return n('disconnected');
          }),
          (e.onmessage = function (e) {
            var t = JSON.parse(e.data).statusText,
              a = JSON.parse(e.data).userData;
            t && o(t),
              a &&
              a.name &&
              a.last_name &&
              a.city &&
              a.hasOwnProperty('points') &&
              a.img
                ? x(a)
                : x({ name: '', last_name: '', city: '', points: 0, img: '' }),
              n(JSON.parse(e.data).status);
          }),
          Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)('div', { id: 'particles-js' }),
              Object(l.jsx)(b, {
                children: (function () {
                  switch (c) {
                    case 'connected':
                      return Object(l.jsx)(C, {});
                    case 'device_connected':
                    case 'error':
                      return Object(l.jsx)(g, {});
                    case 'card_connected':
                      return 0 === m.name.length
                        ? Object(l.jsx)(g, {})
                        : Object(l.jsx)(v, { user: m });
                    default:
                      return Object(l.jsx)(I.a, {});
                  }
                })(),
              }),
            ],
          })
        );
      };
      a(35);
      r.a.render(Object(l.jsx)(B, {}), document.getElementById('root'));
    },
  },
  [[36, 1, 2]],
]);
//# sourceMappingURL=main.c10ac19e.chunk.js.map
