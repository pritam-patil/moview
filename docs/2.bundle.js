(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{478:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(12),i=a.n(c),l=a(11),o=a.n(l),s=a(8),u=a.n(s),d=a(1),p=a.n(d),m=a(10),v=a.n(m),h=a(2),f=a.n(h),g=a(0),y=a.n(g),E=a(6),k=a.n(E),C=a(482),b=a(110),x=a(107),w=a(476),N=a(191),O=a(472),I=a(99),j=a(86),T=function(e){var t=e.genres,a=e.time,n=e.title,r=e.rating;return y.a.createElement(O.a,{columns:3,divided:!0,className:"movie-card"},y.a.createElement(O.a.Row,{className:"movie-details"},y.a.createElement(O.a.Column,{className:"movie-genres"},y.a.createElement("section",null,t&&t.map(function(e,t){return y.a.createElement(I.a,{color:"blue",style:{margin:"4px"}},e.name)}))),y.a.createElement(O.a.Column,{width:3},y.a.createElement(b.d,{title:n,vote_average:r})),y.a.createElement(O.a.Column,{width:5},y.a.createElement(I.a,{image:!0,color:"orange"},y.a.createElement(j.a,{name:"clock outline"})," ".concat(a," min")))))},P=a(3),A=a.n(P),S=a(4),D=a.n(S),M=a(15),L=a(102),U=a(56),J=a.n(U),F=a(24),G=a.n(F),H=a(7),K=a.n(H),q=a(23),R=a.n(q),z=a(32),B=a.n(z),Q=(a(19),a(101)),V=a(5),W=a(188),X=a(103),Y=a(13),Z=a.n(Y),$=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return a=o()(this,(e=u()(t)).call.apply(e,[this].concat(c))),f()(p()(p()(a)),"handleClick",function(e){return K()(a.props,"onClick",e,a.props)}),a}return v()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.children,r=e.className,c=e.content,i=D()(Object(M.a)(a,"active"),"title",r),l=Object(L.a)(t,this.props),o=Object(Q.a)(t,this.props);return Z()(c)?y.a.createElement(o,A()({},l,{className:i,onClick:this.handleClick}),n):y.a.createElement(o,A()({},l,{className:i,onClick:this.handleClick}),y.a.createElement(j.a,{name:"dropdown"}),c)}}]),t}(g.Component);function ee(e){var t=e.active,a=e.children,n=e.className,r=e.content,c=D()("content",Object(M.a)(t,"active"),n),i=Object(L.a)(ee,e),l=Object(Q.a)(ee,e);return y.a.createElement(l,A()({},i,{className:c}),V.a.isNil(a)?r:a)}f()($,"handledProps",["active","as","children","className","content","index","onClick"]),$.propTypes={},$.create=Object(X.d)($,function(e){return{content:e}}),ee.handledProps=["active","as","children","className","content"],ee.propTypes={},ee.create=Object(X.d)(ee,function(e){return{content:e}});var te=ee,ae=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return a=o()(this,(e=u()(t)).call.apply(e,[this].concat(c))),f()(p()(p()(a)),"handleTitleOverrides",function(e){return{onClick:function(t,n){K()(e,"onClick",t,n),K()(a.props,"onTitleClick",t,n)}}}),a}return v()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.content,n=e.index,r=e.title;return y.a.createElement(g.Fragment,null,$.create(r,{autoGenerateKey:!1,defaultProps:{active:t,index:n},overrideProps:this.handleTitleOverrides}),te.create(a,{autoGenerateKey:!1,defaultProps:{active:t}}))}}]),t}(g.Component);f()(ae,"handledProps",["active","content","index","onTitleClick","title"]),ae.propTypes={},ae.create=Object(X.d)(ae,null);var ne=ae,re=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return a=o()(this,(e=u()(t)).call.apply(e,[this].concat(c))),f()(p()(p()(a)),"computeNewIndex",function(e){var t=a.props.exclusive,n=a.state.activeIndex;return t?e===n?-1:e:B()(n,e)?R()(n,e):J()(n).concat([e])}),f()(p()(p()(a)),"handleTitleClick",function(e,t){var n=t.index;a.trySetState({activeIndex:a.computeNewIndex(n)}),K()(a.props,"onTitleClick",e,t)}),f()(p()(p()(a)),"isIndexActive",function(e){var t=a.props.exclusive,n=a.state.activeIndex;return t?n===e:B()(n,e)}),a}return v()(t,e),i()(t,[{key:"getInitialAutoControlledState",value:function(e){return{activeIndex:e.exclusive?-1:[]}}},{key:"componentDidMount",value:function(){0}},{key:"componentDidUpdate",value:function(){0}},{key:"render",value:function(){var e=this,a=this.props,n=a.className,r=a.children,c=a.panels,i=D()("accordion",n),l=Object(L.a)(t,this.props),o=Object(Q.a)(t,this.props);return y.a.createElement(o,A()({},l,{className:i}),V.a.isNil(r)?G()(c,function(t,a){return ne.create(t,{defaultProps:{active:e.isIndexActive(a),index:a,onTitleClick:e.handleTitleClick}})}):r)}}]),t}(W.a);function ce(e){var t=e.className,a=e.fluid,n=e.inverted,r=e.styled,c=D()("ui",Object(M.a)(a,"fluid"),Object(M.a)(n,"inverted"),Object(M.a)(r,"styled"),t),i=Object(L.a)(ce,e);return y.a.createElement(re,A()({},i,{className:c}))}f()(re,"defaultProps",{exclusive:!0}),f()(re,"autoControlledProps",["activeIndex"]),f()(re,"handledProps",["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"]),re.propTypes={},re.create=Object(X.d)(re,function(e){return{content:e}}),ce.handledProps=["className","fluid","inverted","styled"],ce.propTypes={},ce.Accordion=re,ce.Content=te,ce.Panel=ne,ce.Title=$;var ie=ce,le=(a(166),function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return a=o()(this,(e=u()(t)).call.apply(e,[this].concat(c))),f()(p()(a),"state",{activeIndex:-1}),f()(p()(a),"handleClick",function(e,t){var n=t.index,r=a.state.activeIndex===n?-1:n;a.setState({activeIndex:r})}),a}return v()(t,e),i()(t,[{key:"isActive",value:function(e,t){return e===t}},{key:"render",value:function(){var e=this.state.activeIndex,t=this.isActive(0,e),a=this.isActive(1,e);return y.a.createElement(ie,{className:"credits",fluid:!0,styled:!0},y.a.createElement(ie.Title,{active:t,index:0,onClick:this.handleClick},y.a.createElement(j.a,{name:t?"angle down":"angle right"}),"Cast"),y.a.createElement(ie.Content,{active:t},y.a.createElement(b.b,{data:this.props.cast})),y.a.createElement(ie.Title,{active:a,index:1,onClick:this.handleClick},y.a.createElement(j.a,{name:a?"angle down":"angle right"}),"Crew"),y.a.createElement(ie.Content,{active:a},y.a.createElement(b.b,{data:this.props.crew})))}}]),t}(g.Component));le.defaultProps={cast:[],crew:[]},le.PropTypes={cast:k.a.array,crew:k.a.array};var oe=function(e){var t=e.genres,a=e.people,n=e.title,r=e.year,c=e.time,i=e.details,l=e.rating,o=e.posterPath;return Object(g.useEffect)(function(){return document.body.style.backgroundImage="url("+o+")",function(){document.body.style.backgroundImage="none"}},[]),y.a.createElement(w.a,{active:"true",fluid:!0,article:"true",role:"article"},y.a.createElement(N.a,{src:e.imgUrl,centered:!0,className:"detail-image"}),y.a.createElement(w.a.Content,null,y.a.createElement(w.a.Header,{className:"phm-title-tile"},n," (",r,")"),y.a.createElement(w.a.Header,{extra:!0}," "),y.a.createElement(w.a.Meta,null,y.a.createElement(T,{genres:t,time:c,title:n,rating:l})),y.a.createElement(w.a.Description,{className:"phm-description"},i),y.a.createElement(w.a.Content,{extra:!0},y.a.createElement(le,{cast:a.cast,crew:a.crew}))))};oe.defaultProps={people:{cast:[],crew:[]}},oe.propTypes={genres:k.a.arrayOf(k.a.string),people:k.a.shape({cast:k.a.array,crew:k.a.array})};var se=Object(g.memo)(oe),ue=function(e){function t(e){var a;return r()(this,t),a=o()(this,u()(t).call(this,e)),f()(p()(a),"fetchMovie",function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"?")+"api_key=651925d45022d1ae658063b443c99784&language=en-US&append_to_response=credits";fetch(t).then(function(e){return e.json()}).then(function(e){return a.setState({movie:e,isLoading:!1})}).catch(function(e){return console.log("error:",e)})}),a.state={isLoading:!0,movie:{},hasError:!1},a}return v()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.fetchMovie(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.movieId,a=e.match.params.movieId;_.isEqual(t,a)||this.fetchMovie(t)}},{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,isLoading:!1}}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,isLoading:!1}),console.log(">> Something went wrong ".concat(JSON.stringify(t)))}},{key:"render",value:function(){var e=this.state,t=e.hasError,a=e.isLoading,n=e.movie;if(a)return null;var r=n.poster_path,c=n.backdrop_path,i=n.credits,l=n.genres,o=n.overview,s=n.release_date,u=n.runtime,d=n.title,p=n.vote_average,m=s?s.substring(0,4):null,v="http://image.tmdb.org/t/p/w1280/".concat(c),h="http://image.tmdb.org/t/p/w1280/".concat(r);return t?y.a.createElement(b.a,null):this.props.offline?y.a.createElement(b.c,null):y.a.createElement("div",{className:"movie-page"},y.a.createElement(se,{title:d,year:m,genres:l,people:i,time:u,details:o,imgUrl:v,rating:p,posterPath:h}),";",y.a.createElement(C.a,{to:"/",className:"go-back"},y.a.createElement("i",{class:"fas fa-arrow-circle-left fa-2x"})))}}]),t}(g.Component);ue.defaultProps={offline:Object(x.a)()},ue.propTypes={offline:k.a.bool};t.default=ue}}]);