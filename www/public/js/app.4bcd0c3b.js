(function (e) {
	function t (t) {
		for (
			var r, a, u = t[0], l = t[1], i = t[2], s = 0, f = [];
			s < u.length;
			s++
		)
			(a = u[s]),
				Object.prototype.hasOwnProperty.call(o, a) &&
					o[a] &&
					f.push(o[a][0]),
				(o[a] = 0);
		for (r in l)
			Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
		p && p(t);
		while (f.length) f.shift()();
		return c.push.apply(c, i || []), n();
	}
	function n () {
		for (var e, t = 0; t < c.length; t++) {
			for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
				var u = n[a];
				0 !== o[u] && (r = !1);
			}
			r && (c.splice(t--, 1), (e = l((l.s = n[0]))));
		}
		return e;
	}
	var r = {},
		a = { app: 0 },
		o = { app: 0 },
		c = [];
	function u (e) {
		return (
			l.p +
			'js/' +
			({}[e] || e) +
			'.' +
			{ 'chunk-2d2138f6': 'bca4bd0c', 'chunk-316f119f': 'fe243aca' }[e] +
			'.js'
		);
	}
	function l (t) {
		if (r[t]) return r[t].exports;
		var n = (r[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
	}
	(l.e = function (e) {
		var t = [],
			n = { 'chunk-316f119f': 1 };
		a[e]
			? t.push(a[e])
			: 0 !== a[e] &&
				n[e] &&
				t.push(
					(a[e] = new Promise(function (t, n) {
						for (
							var r =
									'css/' +
									({}[e] || e) +
									'.' +
									{
										'chunk-2d2138f6': '31d6cfe0',
										'chunk-316f119f': 'dd4d6273'
									}[e] +
									'.css',
								o = l.p + r,
								c = document.getElementsByTagName('link'),
								u = 0;
							u < c.length;
							u++
						) {
							var i = c[u],
								s =
									i.getAttribute('data-href') ||
									i.getAttribute('href');
							if ('stylesheet' === i.rel && (s === r || s === o))
								return t();
						}
						var f = document.getElementsByTagName('style');
						for (u = 0; u < f.length; u++) {
							(i = f[u]), (s = i.getAttribute('data-href'));
							if (s === r || s === o) return t();
						}
						var p = document.createElement('link');
						(p.rel = 'stylesheet'),
							(p.type = 'text/css'),
							(p.onload = t),
							(p.onerror = function (t) {
								var r = (t && t.target && t.target.src) || o,
									c = new Error(
										'Loading CSS chunk ' +
											e +
											' failed.\n(' +
											r +
											')'
									);
								(c.code = 'CSS_CHUNK_LOAD_FAILED'),
									(c.request = r),
									delete a[e],
									p.parentNode.removeChild(p),
									n(c);
							}),
							(p.href = o);
						var d = document.getElementsByTagName('head')[0];
						d.appendChild(p);
					}).then(function () {
						a[e] = 0;
					}))
				);
		var r = o[e];
		if (0 !== r)
			if (r) t.push(r[2]);
			else {
				var c = new Promise(function (t, n) {
					r = o[e] = [ t, n ];
				});
				t.push((r[2] = c));
				var i,
					s = document.createElement('script');
				(s.charset = 'utf-8'),
					(s.timeout = 120),
					l.nc && s.setAttribute('nonce', l.nc),
					(s.src = u(e));
				var f = new Error();
				i = function (t) {
					(s.onerror = s.onload = null), clearTimeout(p);
					var n = o[e];
					if (0 !== n) {
						if (n) {
							var r =
									t &&
									('load' === t.type ? 'missing' : t.type),
								a = t && t.target && t.target.src;
							(f.message =
								'Loading chunk ' +
								e +
								' failed.\n(' +
								r +
								': ' +
								a +
								')'),
								(f.name = 'ChunkLoadError'),
								(f.type = r),
								(f.request = a),
								n[1](f);
						}
						o[e] = void 0;
					}
				};
				var p = setTimeout(function () {
					i({ type: 'timeout', target: s });
				}, 12e4);
				(s.onerror = s.onload = i), document.head.appendChild(s);
			}
		return Promise.all(t);
	}),
		(l.m = e),
		(l.c = r),
		(l.d = function (e, t, n) {
			l.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(l.r = function (e) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module'
				}),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(l.t = function (e, t) {
			if ((1 & t && (e = l(e)), 8 & t)) return e;
			if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(l.r(n),
				Object.defineProperty(n, 'default', {
					enumerable: !0,
					value: e
				}),
				2 & t && 'string' != typeof e)
			)
				for (var r in e)
					l.d(
						n,
						r,
						function (t) {
							return e[t];
						}.bind(null, r)
					);
			return n;
		}),
		(l.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e['default'];
						}
					: function () {
							return e;
						};
			return l.d(t, 'a', t), t;
		}),
		(l.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(l.p = '/'),
		(l.oe = function (e) {
			throw (console.error(e), e);
		});
	var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
		s = i.push.bind(i);
	(i.push = t), (i = i.slice());
	for (var f = 0; f < i.length; f++) t(i[f]);
	var p = s;
	c.push([ 0, 'chunk-vendors' ]), n();
})({
	0: function (e, t, n) {
		e.exports = n('56d7');
	},
	1: function (e, t) {},
	'56d7': function (e, t, n) {
		'use strict';
		n.r(t);
		n('e260'), n('e6cf'), n('cca6'), n('a79d');
		var r = n('2b0e'),
			a = n('ce5b'),
			o = n.n(a),
			c = (n('bf40'), n('fcf4'));
		r['default'].use(o.a);
		var u = {
				theme: {
					themes: {
						light: {
							primary: c['a'].grey.darken3,
							secondary: c['a'].lightBlue,
							accent: '#8c9eff',
							error: '#b71c1c'
						}
					}
				}
			},
			l = new o.a(u),
			i = n('f87c'),
			s = n('8055'),
			f = n.n(s),
			p = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'v-app',
					[
						n('Header'),
						n(
							'v-content',
							{ staticClass: 'grey lighten-4 fill-height' },
							[ n('router-view') ],
							1
						),
						n('Footer')
					],
					1
				);
			},
			d = [],
			h = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'nav',
					[
						n(
							'v-app-bar',
							{
								attrs: {
									app: '',
									'clipped-left':
										e.$vuetify.breakpoint.lgAndUp
								}
							},
							[
								n(
									'v-toolbar-title',
									{ staticClass: 'headline text-uppercase' },
									[
										n(
											'span',
											{
												staticClass:
													'font-weight-medium'
											},
											[ e._v('Grow') ]
										),
										n(
											'span',
											{
												staticClass: 'font-weight-light'
											},
											[ e._v('User Interface') ]
										)
									]
								),
								n('v-spacer'),
								n(
									'v-btn',
									{
										attrs: {
											text: '',
											depressed: '',
											target: '_blank'
										}
									},
									[
										n('span', { staticClass: 'mr-2' }, [
											e._v('Login')
										])
									]
								)
							],
							1
						)
					],
					1
				);
			},
			v = [],
			m = (n('a740'), n('2877')),
			g = {},
			b = Object(m['a'])(g, h, v, !1, null, null, null),
			y = b.exports,
			w = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'v-footer',
					{
						staticClass: 'white--text',
						attrs: { app: '', color: 'primary lighten-1' }
					},
					[
						n('span', [ e._v('Grow User Interface') ]),
						n('v-spacer'),
						n('span', [ e._v('© 2020') ])
					],
					1
				);
			},
			_ = [],
			k = { name: 'Footer' },
			j = k,
			O = Object(m['a'])(j, w, _, !1, null, null, null),
			x = O.exports,
			C = { name: 'App', components: { Header: y, Footer: x } },
			E = C,
			P = Object(m['a'])(E, p, d, !1, null, null, null),
			A = P.exports,
			S = (n('d3b7'), n('8c4f'));
		r['default'].use(S['a']);
		var T = [
				{
					path: '/',
					name: 'Dashboard',
					component: function () {
						return n.e('chunk-316f119f').then(n.bind(null, '7277'));
					}
				},
				{
					path: '/Projects',
					name: 'DBM > Projects',
					meta: { title: 'Home Page - Example App' },
					component: function () {
						return n.e('chunk-2d2138f6').then(n.bind(null, 'acca'));
					}
				}
			],
			L = new S['a']({ routes: T }),
			B = L;
		r['default'].config.productionTip = !1;
		var M = f()('http://play-minecity.nl:42069');
		r['default'].use(i['a'], M),
			new r['default']({
				router: B,
				vuetify: l,
				render: function (e) {
					return e(A);
				}
			}).$mount('#app');
	},
	a740: function (e, t, n) {
		'use strict';
		var r = n('c895'),
			a = n.n(r);
		a.a;
	},
	c895: function (e, t, n) {}
});
//# sourceMappingURL=app.4bcd0c3b.js.map
