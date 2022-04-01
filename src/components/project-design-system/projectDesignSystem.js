import React, {useEffect} from "react";
import "./projectDesignSystem.css";

const ProjectDesignSystem = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    function changeTheme(e) {
        e.classList.toggle("onoffswitch_checked");
        for (var t = document.getElementsByClassName("theme"), o = 0; o < t.length; o++) {
            console.log((t[o].classList.contains("theme_color_project-inverse") || t[o].classList.contains("theme_color_project-default")) && (t[o].classList.toggle("theme_color_project-inverse"), t[o].classList.toggle("theme_color_project-default")));
        }
    }
    
    function toggleAccordion(e) {
        for (var t = e.childNodes, o = 0; o < t.length; o++) t[o].classList.contains("e-accordion__more") && (t[o].style.display = t[o].style.display ? "" : "block")
    }

    function onClickDesignSystem(e) {
        var t = e.target.closest(".onoffswitch"),
        o = e.target.closest(".e-accordion__short");
        t ? changeTheme(t) : o && toggleAccordion(o.parentNode);
    }
    
    return (
      <div className="project-design-system" onClick={(event) => {onClickDesignSystem(event)}}>
        <div className="page theme theme_color_project-default theme_size_default theme_space_default theme_gap_small">
        <div className="design-system-header">
            <div className="header__content">
                <div className="header__logo"></div>
                <div className="onoffswitch onoffswitch_checked">
                    <div class="onoffswitch__prompt">Click me</div>
                    <div className="onoffswitch__button"></div>
                </div>
            </div>
        </div>
        <div className="layout">
            <div className="layout__container layout__container_size_m layout__container_align_center section section_indent-b_xxxxl">
            <div className="grid grid_m-columns_12 grid_col-gap_full grid_row-gap_full">
                <div className="grid__fraction grid__fraction_m-col_4">
                <div className="cover theme theme_color_project-brand card card_view_default">
                    <div className="cover__info card__content card__content_space-a_xxl">
                    <div className="cover__preview">
                        <div className="image"></div>
                    </div>
                    <div className="text text_view_primary text_size_xxl cover__text">
                        <div className="text__word text__word_width_l"></div>
                    </div>
                    <div className="text text_view_primary text_size_xxl cover__text">
                        <div className="text__word text__word_width_m"></div>
                    </div>
                    </div>
                    <div className="cover__footer card__footer card__footer_space-a_xxl">
                    <div className="button button_size_l button_width_full"></div>
                    </div>
                </div>
                </div>
                <div className="grid__fraction grid__fraction_m-col_8">
                <div className="text text_size_xxl text_view_primary text_type_h1">
                    <div className="text__word text__word_width_l"></div>
                </div>
                <div className="text text_view_primary text_size_m">
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                </div>
                <div className="text text_size_xl text_view_primary text_type_h2">
                    <div className="text__word text__word_width_l"></div>
                </div>
                <div className="text text_view_primary text_size_m">
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_l"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_m"></div>
                    <div className="text__word text__word_width_s"></div>
                </div>
                </div>
            </div>
            </div>
            <div className="layout__container theme theme_color_project-inverse section section_space-v_xxxxl">
            <div className="layout__container layout__container_size_m layout__container_align_center">
                <div className="text text_view_primary text_size_xl product__title">
                <div className="text__word text__word_width_l"></div>
                <div className="text__word text__word_width_l"></div>
                </div>
                <div className="grid grid_m-columns_12 grid_row-gap_half grid_col-gap_half">
                <div className="grid__fraction grid__fraction_m-col_3">
                    <div className="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div className="product__content card__content card__content_space-a_m">
                        <div className="product__image theme theme_color_project-default">
                        <div className="image"></div>
                        </div>
                    </div>
                    <div className="product__footer card__footer card__footer_space-a_m">
                        <div className="text text_size_m text_view_primary">
                        <div className="text__word text__word_width_l"></div>
                        </div>
                        <div className="text text_size_s text_view_primary">
                        <div className="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid__fraction grid__fraction_m-col_3">
                    <div className="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div className="product__content card__content card__content_space-a_m">
                        <div className="product__image theme theme_color_project-default">
                        <div className="image"></div>
                        </div>
                    </div>
                    <div className="product__footer card__footer card__footer_space-a_m">
                        <div className="text text_size_m text_view_primary">
                        <div className="text__word text__word_width_l"></div>
                        </div>
                        <div className="text text_size_s text_view_primary">
                        <div className="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid__fraction grid__fraction_m-col_3">
                    <div className="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div className="product__content card__content card__content_space-a_m">
                        <div className="product__image theme theme_color_project-default">
                        <div className="image"></div>
                        </div>
                    </div>
                    <div className="product__footer card__footer card__footer_space-a_m">
                        <div className="text text_size_m text_view_primary">
                        <div className="text__word text__word_width_l"></div>
                        </div>
                        <div className="text text_size_s text_view_primary">
                        <div className="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid__fraction grid__fraction_m-col_3">
                    <div className="product card card_view_default card_border_all theme theme_color_project-inverse">
                    <div className="product__content card__content card__content_space-a_m">
                        <div className="product__image theme theme_color_project-default">
                        <div className="image"></div>
                        </div>
                    </div>
                    <div className="product__footer card__footer card__footer_space-a_m">
                        <div className="text text_size_m text_view_primary">
                        <div className="text__word text__word_width_l"></div>
                        </div>
                        <div className="text text_size_s text_view_primary">
                        <div className="text__word text__word_width_m"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="design-system-footer">
            <div className="footer__content">
            <div className="text text_view_primary text_size_l">
                <div className="text__word text__word_width_l"></div>
                <div className="text__word text__word_width_s"></div>
            </div>
            <div className="text text_view_primary text_size_l">
                <div className="text__word text__word_width_l"></div>
            </div>
            </div>
        </div>
        </div>
      </div>
    );
}

export default ProjectDesignSystem;